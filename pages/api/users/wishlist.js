
import nextConnect from 'next-connect';
import applyMiddleware from '../../../middleware/withMiddleware';
// import middleware from '../../../middleware/databaseUpdater';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler, "updater");
/**
 * @author Austin Bursey
 * @public
 * @summary Get request for the wishlist of a user, if the user is a guest shopper, get the wishlist from local storage. 
 * @argument userId belonging to the user, undefined if the user is a guest.  
 * @returns Array of products. 
 */
handler.get(async (req, res) => {
    try{
        if (req.email) {
            let doc = {}
            doc = await req.db.collection('Users').find({_id : req.email },{projection:{_id : 0,wishlist:1}}).toArray();
    
            res.json(doc)
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

        
        let doc = await req.db.collection('Users').find({"email" :userID },{projection:{_id : 0,wishlist:1}}).toArray();
        let wishlist = doc[0].wishlist
        let index = -1 ; 
        wishlist.map((item , i )=>{
            if (item.productID === product.productID){
                index = i; 
            }
        });
        if (index === -1){
            wishlist.push(product);
        }else {
            wishlist.splice(index,1);
        }
        let variable = await req.db.collection('Users').updateOne({"email" : userID }, {$set:{wishlist:wishlist}}, {upsert: false}).catch(function(err){throw err; })
    

        

        res.status(200).send({
            status: 'ok',
            message: 'Item added seccessfully',
        });
    }
    

});

export default (req, res) => handler.apply(req, res) 