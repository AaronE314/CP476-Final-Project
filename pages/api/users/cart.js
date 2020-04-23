
import nextConnect from 'next-connect';
import middleware from '../../../middleware/databaseUpdater';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);
/**
 * @author Austin Bursey
 * @public
 * @summary Get request for the shopping cart of a user, if the user is a guest shopper, get the shopping cart from local storage. 
 * @argument userId belonging to the user, undefined if the user is a guest.  
 * @returns Array of products. 
 */
handler.get(async (req, res) => {
    try{
        if (req.session.userId !== undefined){
            let doc = {}
            doc = await req.db.collection('Users').find({"email" : req.session.userID },{projection:{_id : 0,shoppingCart:1}}).toArray();
    
            console.log(doc[0]);
            res.json(doc[0])
        }
    }catch(err){
        throw err; 
    }

})
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
    let { userID, product ,quantity} = JSON.parse(body);
    if (userID !== undefined){


        let doc = await req.db.collection('Users').find({"email" : userID },{projection:{_id : 0,shoppingCart:1}}).toArray();
        let shoppingCart = doc[0].shoppingCart
        let index = -1 ; 
        
        shoppingCart.map((item,i )=>{
            if (item.productID === product.productID && item.size === product.size && item.colours.hex === product.colours.hex){
                item.quantity = quantity; 
                index = i; 
                
            }
        })
        if (index  === -1 ){
            product.quantity = quantity; 
            
            shoppingCart.push(product);
        }
        
        
        let variable = await req.db.collection('Users').updateOne({"email" : userID }, {$set:{shoppingCart:shoppingCart}}, {upsert: false}).catch(function(err){throw err; })
        res.status(200).send({
            status: 'ok',
            message: `Item added to shopping cart seccessfully quantity is ${quantity }`,
        }); 
        
    }
    

});

export default (req, res) => handler.apply(req, res) 