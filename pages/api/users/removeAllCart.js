
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
 * @summary get request for the emptying the shopping cart of a user.
 * @argument userId belonging to the user, undefined if the user is a guest. 
 * @returns Array of products. 
 */
handler.get(async (req, res) => {
    let userID = req.email
    if (userID !== undefined){

        let shoppingCart = []

        let variable = await req.db.collection('Users').updateOne({"email" : userID }, {$set:{shoppingCart:shoppingCart}}, {upsert: false}).catch(function(err){console.log(err); throw err; })

        res.status(200).send({
            status: 'ok',
            message: `Item removed ALL from shopping cart successfully`,
        }); 
    }
});

export default (req, res) => handler.apply(req, res) 