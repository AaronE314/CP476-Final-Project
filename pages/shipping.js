import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
const Shipping = () => {

    // const [orders, setOrders] = useState();



    return <Layout fullPage={false}>
        <div>
            <h1>Shipping Information</h1>
            <h2>Standard shipping</h2>
            <p>Standard home delivery CAD $20 / Delivery in 5-7 business days</p>
            <h2>Free shipping</h2>
            <p>Free delivery on orders over CAD $200 before shipping & taxes</p>
        </div>
        

        <style jsx>{`
            h1 {
                text-transform: uppercase;
                margin-bottom: 32px;
                line-height: 1em;
            }
            h2 {
                font-family: "Open Sans";
                letter-spacing: 0;
            }
            p {
                font-family: "Open Sans";
                font-weight: normal;
                letter-spacing: 0;
            }

            div {
                margin: 0 192px;
            }

            @media only screen and (max-width: 1000px) {
                
                div {
                    margin: 0 120px;
                }

            }

            @media only screen and (max-width: 610px) {

                div {
                    margin: 45px 16px 0 16px;
                }

            }

        `}</style>

    </Layout>

};


export default Shipping;