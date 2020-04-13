/**
 * @author Austin Bursey
 * @public
 * @summary Get request for all categories for an overlay
 * @argument gender that you would like to sort by. 
 * @returns Array of strings for category names
 */
import nextConnect from 'next-connect';
import middleware from '../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try{
        let doc = {}
        doc = await req.db.collection('Overlay').find({}).toArray();

        let temp = await doc;
        console.log(temp);

        res.json(temp)
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 