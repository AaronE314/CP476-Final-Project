
import nextConnect from 'next-connect';
import middleware from '../../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try{
        
        let doc = {}
        
        let findQuery = {email: req.query.email, orderNumber : req.query.orderNumber}; 

        
        doc = await req.db.collection('Orders').find(findQuery).toArray();
        res.json(doc[0]);
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 