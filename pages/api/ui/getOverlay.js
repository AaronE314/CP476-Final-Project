/**
 * @author Austin Bursey
 * @public
 * @summary [NOT WORKING] Get request for all categories for an overlay
 * @argument gender that you would like to sort by. 
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
        doc = await req.db.collection('Overlay').find({}).toArray();
        let temp = await doc;
        console.log("done");
        res.json(temp)
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