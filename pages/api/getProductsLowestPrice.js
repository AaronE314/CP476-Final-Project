import nextConnect from 'next-connect';
import middleware from '../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try{
        const { productType } = req.query;
        let doc = {}
        doc = await req.db.collection('StoreProducts').find({"category":req.query.productType}).sort({"price":1}).toArray();

        res.json(doc)
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 