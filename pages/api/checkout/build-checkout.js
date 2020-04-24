// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {

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

    const order = {
        payment_method_types: ["card"],
        orderNumber: orderNumber,
        line_items: [
            {
                amount: req.body.price,
                currency: "cad",
                quantity: req.body.quantity,
                address: req.body.address,
                billingInfo: req.body.billingInfo,
                products: req.body.products
            }
        ]
    }

    // TODO: add order to db

    res.json({message: "ok", orderNumber: orderNumber});

}; 