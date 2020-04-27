import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
const Faq = () => {

    // const [orders, setOrders] = useState();



    return <Layout fullPage={false}>
        <div>
            <h1>Frequently Asked Questions</h1>
            <h2>First question here</h2>
            <p>This is where the answer would go.</p>
            <h2>Second question here</h2>
            <p>This is where the answer would go.</p>
            <h2>Third question here</h2>
            <p>This is where the answer would go.</p>
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


export default Faq;