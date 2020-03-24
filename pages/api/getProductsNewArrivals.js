/**
 * @author Austin Bursey
 * @public
 * @summary Get request for aLL new arrivals for a specific gender 
 * @argument gender [in html] that you would like to sort by. 
 */


import nextConnect from 'next-connect';
import middleware from '../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try{
        const { productType } = req.query;
        let doc = {}
        doc = await req.db.collection('StoreProducts').find({ "gender": req.query.gender, "newArrival" : true}).toArray();

        res.json(doc)
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 