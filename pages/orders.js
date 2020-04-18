import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Order from '../components/order';
import { isSignedIn } from '../lib/userAuth';
import Router from 'next/router';

const Orders = ({orders}) => {

    // const [orders, setOrders] = useState();



    return <Layout fullPage={false}>
        
        <div className="orders">
            {orders.map((order, i) => {
                return <Order order={order} key={i}/>
            })}
        </div>
        

        <style jsx>{`

            .orders {
                margin: 0 192px;
            }

            @media only screen and (max-width: 1000px) {
                
                .orders {
                    margin: 0 120px;
                }

            }

            @media only screen and (max-width: 610px) {

                .orders {
                    margin: 45px 25px 0 25px;
                }

            }

        `}</style>

    </Layout>

};

Orders.getInitialProps = async (ctx) => {

    if (await isSignedIn()) {

        // TODO: get orders for db
        return {
            orders: [
            {
                orderId: "1234567890",
                date: "27/03/2020",
                cost: "229.60",
                Quantity: 17,
                Address: "123 Street Ave. Toronto, ON",
                productImages: [
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    
                ]
            },
            {
                orderId: "0987654321",
                date: "20/02/2020",
                cost: "70.49",
                Quantity: 5,
                Address: "123 Street Ave. Toronto, ON",
                productImages: [
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    '/images/tempImages/tempImg1_1.jpg',
                    
                ]
            }
        ]};
    } else {
        if (ctx.res) {
            ctx.res.writeHead(302, {
                Location: "/",
                'Content-Type': 'text/html; charset=utf-8',
            });
            ctx.res.end();
        } else {
            Router.push("/");
        }
    }

    return {};

}




export default Orders;