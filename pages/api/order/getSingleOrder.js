
import nextConnect from 'next-connect';
// import middleware from '../../../middleware/ReadOnlydatabase';
import applyMiddleware from '../../../middleware/withMiddleware';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler, 'readonly');

handler.get(async (req, res) => {
    try{
        
        let doc = {}
        
        let findQuery = {email: req.query.email, orderNumber : req.query.orderNumber}; 

        
        doc = await req.db.collection('Orders').find(findQuery).toArray();
        res.json(doc[0]);
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