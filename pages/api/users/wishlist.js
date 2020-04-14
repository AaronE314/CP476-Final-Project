
import nextConnect from 'next-connect';
import middleware from '../../middleware/ReadOnlydatabase';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);
/**
 * @author Austin Bursey
 * @public
 * @summary Get request for the wishlist of a user, if the user is a guest shopper, get the wishlist from local storage. 
 * @argument userId belonging to the user, undefined if the user is a guest.  
 * @returns Array of products. 
 */
handler.get(async (req, res) => {
    try{
        if (req.session.userId !== undefined){
            let doc = {}
            doc = await req.db.collection('Users').find({_id : req.session.userId },{_id : 0,wishlist:1}).toArray();
    
            console.log(doc);
            res.json(doc)
        }else {
            //DO LOCAL STORAGE HERE 
        }

    }catch(err){
        throw err; 
    }

})
/**
 * @author Austin Bursey
 * @public
 * @summary post request for the wishlist of a user, if the user is a guest shopper, put the product in the local storage wishlist. 
 * @argument userId belonging to the user, undefined if the user is a guest.
 * @argument product the product the user would like to add to their wishlist.  
 * @returns Array of products. 
 */
handler.post(async (req, res) => {

    let body = req.body
    let { userID, product } = JSON.parse(body);
    if (userID !== undefined){


        let doc = await req.db.collection('Users').find({"_id" : req.session.userId },{_id : 0,wishlist:1}).toArray();
        doc.push(product);
        await req.db.collection('Users').updateOne({"_id" : req.session.userId}, {$set:{wishlist:doc}}, {upsert: false}).catch(function(err){throw err; })
        return 
        
    }else {
        //add product to local storage wish list
    }
    

});

export default (req, res) => handler.apply(req, res) 