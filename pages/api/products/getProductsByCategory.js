/**
 * @author Austin Bursey
 * @public
 * @summary Get request for all products for a specific gender by category
 * @argument gender [in html] that you would like to sort by. 
 * @argument category [in html] the category of products you are sorting 
 */

import nextConnect from 'next-connect';
// import middleware from '../../../middleware/ReadOnlydatabase';
import applyMiddleware from '../../../middleware/withMiddleware';
import {ObjectID} from 'mongodb';

const handler = nextConnect();
applyMiddleware(handler, "readonly");

// handler.use(middleware);

handler.get(async (req, res) => {
    try{
        
        let doc = {}

        doc = await req.db.collection('StoreProducts').find({"Category":req.query.category, "gender": req.query.gender}).toArray();
        res.json(doc)
    }catch(err){
        throw err; 
    } finally {
        console.log("closing");
        try {
            req.dbClient.close().catch();
        } catch(e) {
            
        }
    }

})


export default (req, res) => handler.apply(req, res) 