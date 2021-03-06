
import nextConnect from 'next-connect';
// import middleware from '../../../middleware/databaseUpdater';
import applyMiddleware from '../../../middleware/withMiddleware';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler, "updater");
/**
 * @author Austin Bursey
 * @public
 * @summary Get request for the shopping cart of a user, if the user is a guest shopper, get the shopping cart from local storage. 
 * @argument userId belonging to the user, undefined if the user is a guest.  
 * @returns Array of products. 
 */
handler.get(async (req, res) => {
    try{
        if (req.email){
            let doc = {}
            doc = await req.db.collection('Users').find({"email" : req.email },{projection:{_id : 0,shoppingCart:1}}).toArray();
    
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
        let placeholder = quantity;   
        index = shoppingCart.findIndex((item)=>item.productID === product.productID && item.size === product.size && item.colours.hex === product.colours.hex);

        if (index  === -1 ){
            product.quantity = quantity; 
            
            shoppingCart.push(product);
        } else {
            if (shoppingCart[index].quantity === undefined){
                shoppingCart[index].quantity = quantity; 
            }else {
                
                shoppingCart[index].quantity += quantity; 
            }
            placeholder = shoppingCart[index].quantity;
        }
        
        let variable = await req.db.collection('Users').updateOne({"email" : userID }, {$set:{shoppingCart:shoppingCart}}, {upsert: false}).catch(function(err){throw err; })
        res.status(200).send({
            status: 'ok',
            message: `Item added to shopping cart seccessfully quantity is ${placeholder }`
        }); 
        
    }
    

});

export default (req, res) => handler.apply(req, res) 