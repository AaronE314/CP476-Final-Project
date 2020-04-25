// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


import nextConnect from 'next-connect';
// import middleware from '../../../middleware/database';
import applyMiddleware from '../../../middleware/withMiddleware';
import {ObjectID} from 'mongodb';
const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler);

handler.post(async (req, res) => {

    // const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items: [
    //         {
    //             name: "T-shirt",
    //             description: "Some shirt",
    //             images: ["/images/tempImages/tempImg1_1.jpg"],
    //             amount: 5,
    //             currency: "cad",
    //             quantity: 1
    //         }
    //     ],
    //     success_url: "http://localhost:3000/confirmation",
    //     cancel_url: "http://localhost:3000/cart"
    // });

    let now = Date.now().toString() // '1492341545873'
    // pad with extra random digit
    now += now + Math.floor(Math.random() * 10)
    // format
    let orderNumber = [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
    let body = JSON.parse(req.body)
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const order = {
        payment_method_types: ["card"],
        orderNumber: orderNumber,
        date:date, 
        line_items: [
            {
                amount: body.price,
                currency: "cad",
                quantity: body.quantity,
                address: body.address,
                billingInfo: body.billingInfo,
                products: body.products
            }
        ]
    }
    
    if (body.email !== undefined){
        
        order.email = body.email; 
    }
    
    let doc = await req.db.collection('Orders').insertOne(order).catch(function(err){throw err; })
    
    // TODO: add order to db

    res.json({message: "ok", orderNumber: orderNumber});

}); 
export default (req, res) => handler.apply(req, res) 