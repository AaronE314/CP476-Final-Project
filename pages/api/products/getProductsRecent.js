/**
 * @author Austin Bursey
 * @public
 * @summary Get request that returns all products by most recent date 
 * @argument category  [in html] the category you would like to sort by. 
 * @argument gender [in html] the gender you are sorting for.   
 */
import nextConnect from 'next-connect';
// import middleware from '../../../middleware/ReadOnlydatabase';
import applyMiddleware from '../../../middleware/withMiddleware';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler, "readonly");

handler.get(async (req, res) => {
    try{
        let doc = {}
        doc = await req.db.collection('StoreProducts').find({"category":req.query.category, "gender": req.query.gender}).sort({"dateCreated":-1}).toArray();
        
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