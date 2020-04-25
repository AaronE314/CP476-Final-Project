
import nextConnect from 'next-connect';
import middleware from '../../../middleware/databaseUpdater';
import {ObjectID} from 'mongodb';

const handler = nextConnect();
handler.use(middleware);
/**
 * @author Austin Bursey
 * @public
 * @summary post request for the shopping cart of a user, if the user is a guest shopper, put the product in the local storage shopping cart. 
 * @argument userId belonging to the user, undefined if the user is a guest.
 * @argument product the product the user would like to add to their shopping cart.  
 * @returns Array of products. 
 */
handler.post(async (req, res) => {

    let body = req.body
    let { userID, product,amount } = JSON.parse(body);
    if (userID !== undefined){


         let doc = await req.db.collection('Users').find({"email" : userID },{projection:{_id : 0,shoppingCart:1}}).toArray();
        let shoppingCart = doc[0].shoppingCart
        let quantity ; 
        let index; 
        shoppingCart.map((item,i)=>{
            if (item.productID === product.productID && item.size === product.size && item.colours.hex === product.colours.hex){
                if (amount === "single"){
                    item.quantity -=1; 
                    quantity = item.quantity;
                    index  = i 
                }else if (amount == "all"){
                    item.quantity = 0 
                    quantity = item.quantity;
                    index  = i 
                }
;   
            }
        })
        if (index !== undefined &&  quantity  <= 0 ){

            shoppingCart.splice(index,1);
        }
        
        
        let variable = await req.db.collection('Users').updateOne({"email" : userID }, {$set:{shoppingCart:shoppingCart}}, {upsert: false}).catch(function(err){throw err; })
        res.status(200).send({
            status: 'ok',
            message: `Item removed from shopping cart successfully quantity now ${quantity}`,
        }); 
        
    }
    

});

export default (req, res) => handler.apply(req, res) 