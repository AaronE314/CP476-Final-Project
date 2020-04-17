/**
 * @author Austin Bursey
 * @public
 * @summary Get request for all products for a specific gender 
 * @argument gender [in html] that you would like to sort by. 
 */
import nextConnect from 'next-connect';
import middleware from '../../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try{
        
        let doc = {}
        let findQuery = {productID: req.query.id}; 
        let returnQuery = {
            _id: 0, 
            productName:1,
            price:1,
            discount:1,
            colours:1,
            sizes:1,
            images:1,
            description:1,
            newArrival:1

        }
        let sortQuery = {}; 

        doc = await req.db.collection('StoreProducts').find(findQuery,{projection:returnQuery}).sort(sortQuery).toArray();
        res.json(doc)
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 