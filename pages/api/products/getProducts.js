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
        console.log("HERE NOW");
        let findQuery = {gender: req.query.gender}; 
        let sortQuery = {}; 
        

        if (req.query.category !== 'undefined'){
          
            
            if (req.query.category ===  'new'){
                findQuery.newArrival = true;
            }else {
                findQuery.Category  = req.query.category; 
            }
           
        }
        console.log(findQuery);
        doc = await req.db.collection('StoreProducts').find(findQuery).sort(sortQuery).toArray();
        res.json(doc)
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 