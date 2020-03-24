/**
 * @author Austin Bursey
 * @public
 * @summary POST request inserts or updated a product.
 * @argument productID [in body] that you would like to update or insert. 
 */

import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    try{
        let data = req.body
        data = JSON.parse(data);
        let doc = await req.db.collection('StoreProducts').updateOne({productID:data.productID}, {$set:data}, {upsert: true}).catch(function(err){throw err; })
    
        res.json({message: 'ok'});
    }catch(err){
        throw err;
    }

});

export default (req, res) => handler.apply(req, res) 