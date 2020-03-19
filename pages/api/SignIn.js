import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);


handler.post(async (req, res) => {
    try{
        let data = req.body
        data = JSON.parse(data);

        let doc = await req.db.collection('Users').findOne({"email":data.email, "password":data.password })
        res.json(doc);
    }catch(err){
        throw err;
    }

});

export default (req, res) => handler.apply(req, res) 