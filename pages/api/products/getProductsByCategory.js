/**
 * @author Austin Bursey
 * @public
 * @summary Get request for all products for a specific gender by category
 * @argument gender [in html] that you would like to sort by. 
 * @argument category [in html] the category of products you are sorting 
 */

import nextConnect from 'next-connect';
import middleware from '../../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try{
        console.log("GWLRFEWSRGREWGERSTGRFESDTGEWRSTGWRASGTESRZHGEDGEDZSHGBWSRGWSRGFESRGFESR GVESSG")
        let doc = {}
        console.log("category");
        console.log(req.query.category);
        doc = await req.db.collection('StoreProducts').find({"Category":req.query.category, "gender": req.query.gender}).toArray();
        console.log(doc)
        res.json(doc)
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 