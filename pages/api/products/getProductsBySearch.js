/**
 * @author Aaron Exley
 * @public
 * @summary Get request for all products for a specific gender 
 * @argument search [in url] query that you would like to filter by. 
 */
import nextConnect from 'next-connect';
import applyMiddleware from '../../../middleware/withMiddleware';
// import middleware from '../../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler, "readonly");


handler.get(async (req, res) => {

    try {

        // console.log("searching");
        
        let doc = {}
        
        let findQuery = {productName: new RegExp(req.query.search, "i")}; 
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

        doc = await req.db.collection('StoreProducts').find(findQuery, {projection:returnQuery}).sort(sortQuery).toArray();
        res.json(doc)
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