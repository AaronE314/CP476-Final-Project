/**
 * @author Austin Bursey
 * @public
 * @summary [NOT WORKING] Get request for all categories for an overlay
 * @argument gender that you would like to sort by. 
 */
import nextConnect from 'next-connect';
import middleware from '../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try{
        let doc = {}
        doc = await req.db.collection('StoreProducts').find({ gender: req.query.gender }, {fields: {category: 1,_id:0 } }).toArray();

        let temp = [];
        await doc.forEach(element => {
           if (temp.indexOf(element.category) === -1){
               temp.push(element.category)
               
           } 
        });

        res.json(temp)
    }catch(err){
        throw err; 
    }

})


export default (req, res) => handler.apply(req, res) 