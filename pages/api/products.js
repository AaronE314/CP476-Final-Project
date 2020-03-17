import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

// handler.get(async (req, res) => {
//     const { productID } = req.query;

//     const dataModel = { "_id": new ObjectID(), "productID": productID, "Sizes": { "label": "Size", "small": 0, "medium": 0, "large": 0 }, "Colors": { "label": "Colors", "red": 10, "blue": 10, "white": 0 }}

//     let doc = {}

//     if(date){
//         doc = await req.db.collection('StoreProducts').findOne({productID: productID})
//     } else {
//         doc = await req.db.collection('StoreProducts').findOne()
//     }
//     if(doc == null){
//         doc = dataModel
//     }
//     res.json(doc)
// }).catch(function(err){
//     throw err; 
// });

handler.post(async (req, res) => {
    try{
        let data = req.body
        data = JSON.parse(data);
        //data.date = new Date(data.date);
        console.log(data);
        let doc = await req.db.collection('StoreProducts').updateOne({productID:data.productID}, {$set:data}, {upsert: true}).catch(function(err){throw err; })
    
        res.json({message: 'ok'});
    }catch(err){
        throw err;
    }

});

export default (req, res) => handler.apply(req, res) 