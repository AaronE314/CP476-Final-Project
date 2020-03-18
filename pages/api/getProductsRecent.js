import nextConnect from 'next-connect';
import middleware from '../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try{
        const { productType } = req.query;
        let doc = {}
        console.log("CLASS : "+ req.query.class)
        doc = await req.db.collection('StoreProducts').find({"category":req.query.productType, "gender": req.query.class}).sort({"dateCreated":-1}).toArray();
        
    
        
        res.json(doc)
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 