
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
 * @summary post request for the shopping cart of a user, if the user is a guest shopper, put the product in the local storage shopping cart. 
 * @argument userId belonging to the user, undefined if the user is a guest.
 * @argument product the product the user would like to add to their shopping cart.  
 * @returns Array of products. 
 */
handler.post(async (req, res) => {

    let body = req.body
    let { userID} = JSON.parse(body);
    if (userID !== undefined){


        
        let shoppingCart = []

        
        
        let variable = await req.db.collection('Users').updateOne({"email" : userID }, {$set:{shoppingCart:shoppingCart}}, {upsert: false}).catch(function(err){throw err; })
        res.status(200).send({
            status: 'ok',
            message: `Item removed ALL from shopping cart successfully`,
        }); 
        
    }
    

});

export default (req, res) => handler.apply(req, res) 