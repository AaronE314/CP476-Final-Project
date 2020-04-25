/**
 * @author Austin Bursey
 * @public
 * @summary Get request for all products for a specific gender 
 * @argument gender [in html] that you would like to sort by. 
 */
import nextConnect from 'next-connect';
// import middleware from '../../../middleware/ReadOnlydatabase';
import applyMiddleware from '../../../middleware/withMiddleware';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler, "readonly");

handler.get(async (req, res) => {
    try{
        
        let doc = {}
        
        let findQuery = {gender: req.query.gender}; 
        let sortQuery = {}; 
        let returnQuery = {
            _id:0,
            productID:1,
            productName:1,
            price:1,
            displayImageIndex:1,
            displayColorIndex:1,
            highlightColor:1,
            wishlisted:1,
            discount:1,
            displayImg:1,
            colours:1,
            dateCreated:1,
            gender:1,
            sizes: 1,
            newArrival:1,
            Category:1
};

        if (req.query.category !== 'undefined'){
          
            
            if (req.query.category ===  'new'){
                findQuery.newArrival = true;
            }else {
                findQuery.Category  = req.query.category; 
            }
           
        }
        // console.log(findQuery);
        doc = await req.db.collection('StoreProducts').find(findQuery, {projection:returnQuery}).sort(sortQuery).toArray();
        res.json(doc)
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 