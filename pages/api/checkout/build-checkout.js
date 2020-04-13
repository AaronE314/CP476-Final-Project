
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                name: "T-shirt",
                description: "Some shirt",
                images: ["/images/tempImages/tempImg1_1.jpg"],
                amount: 5,
                currency: "cad",
                quantity: 1
            }
        ],
        success_url: "http://localhost:3000/confirmation",
        cancel_url: "http://localhost:3000/cart"
    });

    res.json(session);

};