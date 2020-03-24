/**
 * @author Austin Bursey
 * @public
 * @summary [NOT DONE] needs error codes 
 * @argument email [in body] that you would like to add to collection. 
 */
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);


handler.post(async (req, res) => {
    try{
        let data = req.body
        data = JSON.parse(data);

        let doc = await req.db.collection('Users').findOne({"email":data.email })
        if (doc == null ){
            doc = await req.db.collection('Users').updateOne({"email":data.email}, {$set:data}, {upsert: true}).catch(function(err){throw err; })
            res.json({message: 'ok'});    
        }else {
            
            res.json({"message": "this email is already registered to an account." })
            console.log("|"+res.status+"|");
            res.status = "failed request, email already belongs to an account."
            res.statusCode = 412 ;

            console.log("|"+res.status+"|");
            console.log("|"+res.statusCode+"|");
        }
        
    }catch(err){
        throw err;
    }

});

export default (req, res) => handler.apply(req, res) 