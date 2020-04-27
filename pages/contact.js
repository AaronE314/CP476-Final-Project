import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
const Contact = () => {

    // const [orders, setOrders] = useState();



    return <Layout fullPage={false}>
        <div>
            <h1>Contact Us</h1>
            <h2>Online 24/7</h2>
            <p>Email: <a href="mailto:cp572verification@gmail.com" target="_blank">cp572verification@gmail.com</a></p>
            <h2>During business hours</h2>
            <p>9:00am to 5:00pm Monday through Friday</p>
            <p>Phone: 123-456-7890</p>
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


export default Contact;