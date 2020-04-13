import React from 'react'
import Layout from '../components/layout';
import Link from 'next/link'
import CheckoutProduct from '../components/CheckoutProduct';
import Router from "next/router";
import fetch from "isomorphic-unfetch";

import { countries } from '../public/countriesRegions'

export class Review extends React.Component {

    constructor(props) {
        super(props);
        

        this.state = {
            numberOfItems: 8,
            total: 0,
            value: 0,
            shipping: 0,
            tax: 0,
            products: [
                {
                    productName: "Product Name",
                    quantity: 1,
                    price: 3.99,
                    discount: 0,
                    size: "S",
                    colour: "Black",
                    orderNumber: "0850318003",
                    imageLink: "/images/tempImages/tempImg1_1.jpg",
                    wishlisted: true,
                },
                {
                    productName: "Product Name",
                    quantity: 2,
                    price: 3.99,
                    discount: 0.2,
                    size: "M",
                    colour: "Black",
                    orderNumber: "0850318004",
                    imageLink: "/images/tempImages/tempImg1_2.jpg",
                    wishlisted: false,
                },
                {
                    productName: "Product Name",
                    quantity: 4,
                    price: 3.99,
                    discount: 0.4,
                    size: "XL",
                    colour: "Blue",
                    orderNumber: "0850318005",
                    imageLink: "/images/tempImages/tempImg1_3.jpg",
                    wishlisted: false,
                },
            ]
        }

        this.getTotal = this.getTotal.bind(this);
        this.goToCheckout = this.goToCheckout.bind(this);
    }

    getSubTotal(product) {
        return (product.price * (1 - product.discount)) * product.quantity;
    }

    getTotal() {

        let total = 0;

        for (let i = 0; i < this.state.products.length; i++) {
            total += this.getSubTotal(this.state.products[i]);
        }

        return total;
    }

    async componentDidMount() {

        console.log("mounted");

        let value = this.getTotal();

        let shipping = (value > 200) ? 0 : 20;

        let tax = value * 0.13;

        let total = value + shipping + tax;

        const checkout = await fetch("/api/checkout/build-checkout").then((r) => r.json());


        this.setState({...this.state, total: total.toFixed(2), 
                                      value: value.toFixed(2), 
                                      tax: tax.toFixed(2), 
                                      shipping: shipping.toFixed(2),
                                      stripe: window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY),
                                      sessionID: checkout.id})
    }

    goToCheckout() {

        // this.state.stripe.redirectToCheckout({
        //     sessionId: this.state.sessionID
        // })
        // .then((result) => {
        //     console.log(result.error.message);
        // });
        Router.push("/confirmation");

    }

    render() {

        return <Layout fullPage={false} stripe={true}>

            <div className="mainContent">

                <h1>REVIEW & PAY</h1>

                <div className="content">
                    <div className="cartItems">
                        {this.state.products.map((product, i) => {
                            
                            return <CheckoutProduct product={product} key={product.orderNumber}/>
                        })}
                        <div className="subTotals">
                            <div className="value">
                                <label>Order value</label>
                                <label className="right">{`CAD $${this.state.value}`}</label>
                            </div>
                            <div className="value">
                                <label>Shipping</label>
                                <label className="right">{`CAD $${this.state.shipping}`}</label>
                            </div>
                            <div className="value">
                                <label>Tax</label>
                                <label className="right">{`CAD $${this.state.tax}`}</label>
                            </div>
                        </div>
                        <div className="total">
                            <label>Total</label>
                            <label className="right">{`CAD $${this.state.total}`}</label>
                        </div>
                    </div>
                    <div className="shipping">
                        
                        <h1>Shipping Information</h1>

                        <p>Been here before? <a href="#">Sign in</a>, or <a href="#">Sign up</a> to checkout faster in the future.</p>
                        
                        <form className="shippingInfo" autoComplete="on" onSubmit={e => {
                            e.preventDefault();
                            // TODO: call stripe
                            this.goToCheckout();
                            // Router.push("/confirmation")
                        }}>
                            <div className="formInputs">
                                <input className="formLeft" type="text" placeholder="First name"/>
                                <input className="formRight" type="text" placeholder="Last name"/>
                                <input className="formLeft" type="email" placeholder="Email address"/>
                                <input className="formRight" type="tel" placeholder="Phone number"/>
                                <input className="formLeftLong" type="text" placeholder="Address"/>
                                <input className="formRightShort" type="text" placeholder="Unit, suite, etc."/>
                                <input className="formLeftLong" type="text" placeholder="City"/>
                                <input className="formRightShort" type="text" placeholder="Postal / ZIP code"/>
                                <select className="formLeft CountyRegion">
                                    <option value="default" defaultChecked>County / Region</option>
                                    {countries.countries.map((item, i) => {
                                        return <option key={i} value={item.name}>{item.name}</option>
                                    })}
                                </select>
                                <input className="formRight" type="text" placeholder="Province / State"/>
                            </div>

                            <div className="checkBoxContainer">
                                <input className="checkbox" type="checkbox"/>
                                <label className="checkboxLabel">Same as shipping information</label>
                            </div>
                            
                            <button className="submit" type="submit" className="reviewBtn">PAY</button>
                        </form>
                    </div>
                </div>

            </div>

            <style jsx>{`
            
                .content {
                    display: grid;
                    grid-template-columns: 50% calc(50% - 98px);
                    grid-template-areas:
                        "products shipping";
                    grid-column-gap: 96px;
                }

                .shipping {
                    grid-area: shipping;
                }

                .shipping > h1 {
                    font-weight: normal;
                    font-size: 32px;
                    line-height: 37px;
                }

                .shipping > p, .shipping > p a{
                    font-family: "Open Sans";
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;
                }

                .shipping > p a {
                    text-decoration: underline;
                }

                .subTotals {
                    margin-top: 24px;
                }

                .subTotals * {
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 24px;
                }

                .checkboxLabel {
                    font-family: "Open Sans";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;
                }

                .checkBoxContainer {
                    position: relative;
                    text-align: left;
                    margin-top: 16px;
                }

                .checkbox {
                    position: absolute;
                    opacity: 0;
                    top: 0;
                    left: 0;
                    z-index: 2;
                }

                .checkbox + label {
                    position: relative;
                    cursor: pointer;
                    padding: 0;
                }

                .checkbox + label:before {
                    content: '';
                    margin-right: 10px;
                    border: 1px solid black;
                    display: inline-block;
                    vertical-align: text-top;
                    width: 15px;
                    height: 15px;
                    background: var(--backgroundColor);
                }

                .checkbox:hover + label:before {
                    background: rgba(0, 0, 0, 0.6);
                }

                .checkbox:focus + label:before {
                    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
                }

                .checkbox:checked + label:before {
                    background: rgba(0, 0, 0, 0.6);
                }

                .checkbox:disabled + label {
                    color: #b8b8b8;
                    cursor: auto;
                }

                .checkbox:disabled + label:before {
                    box-shadow: none;
                    background: #ddd;
                }

                .checkbox:checked + label:after {
                    content: '';
                    position: absolute;
                    left: 4px;
                    top: 8px;
                    background: var(--backgroundColor);
                    width: 2px;
                    height: 2px;
                    box-shadow: 
                        2px 0 0 var(--backgroundColor),
                        4px 0 0 var(--backgroundColor),
                        4px -2px 0 var(--backgroundColor),
                        4px -4px 0 var(--backgroundColor),
                        4px -6px 0 var(--backgroundColor),
                        4px -8px 0 var(--backgroundColor);
                    transform: rotate(45deg);
                }

                .mainContent {
                    width: calc(100% - (2 * 138px));
                    margin: 16px 138px 96px 138px;
                }

                .mainContent > h1 {
                    margin-top: 16px;
                }

                .formInputs {
                    display: grid;
                    grid-template: 1fr 1fr 1fr 1fr;
                    grid-gap: 16px;
                }

                .formLeft {
                    grid-column: 1 / span 2;
                }

                .formRight {
                    grid-column: 3 / span 2;
                }

                .formLeftLong {
                    grid-column: 1 / span 3;
                }

                .formRightShort {
                    grid-column: 4 / span 1;
                }

                .cartItems { 
                    grid-area: products;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(578px, 1fr));
                    grid-column-gap: 16px;
                }

                .shippingInfo input, .shippingInfo select {
                    background: rgba(0, 0, 0, 0.07);
                    height: calc(40px - 10px - 11px);
                    padding: 10px 8px 11px 8px;
                    border: none;
                }

                .shippingInfo input::placeholder{
                    color: rgba(0, 0, 0);
                    opacity: 0.54;
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;
                }

                .shippingInfo select {
                    background: rgba(0, 0, 0, 0.07);
                    color: rgba(0, 0, 0, 0.54);
                    height: 40px;
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;
                }

                .right {
                    float: right;
                }

                .total {
                    margin-top: 24px;
                }

                .reviewBtn {

                    border: none;

                    width: 100%;
                    height: 48px;

                    margin: 30px 8px 30px 0;
                    padding: 0;

                    background: var(--highlightColor);

                    position: relative;

                }

                .reviewBtn:hover {
                    filter: brightness(95%);
                    cursor: pointer;
                }

                @media only screen and (max-width: 1300px) {

                    .content {
                        grid-template-columns: 100%;
                        grid-template-areas:
                            "products"
                            "shipping";
                    }

                    .mainContent {
                        width: calc(100% - (2 * 48px));
                        margin: 0 48px;
                    }
                }

                @media only screen and (max-width: 992px) {

                    .mainContent {
                        width: calc(100% - (2 * 16px));
                        margin: 0 16px;
                    }

                    .cartItems {
                        grid-template-columns: 100%;
                    }

                    .formInputs {
                        grid-template: 100%;
                        grid-gap: 16px;
                    }

                    .formInputs {
                        grid-template: 100%;
                        grid-gap: 16px;
                    }

                    .formLeft {
                        grid-column: 1;
                    }

                    .formRight {
                        grid-column: 1;
                    }

                    .formLeftLong {
                        grid-column: 1;
                    }

                    .formRightShort {
                        grid-column: 1;
                    }
                }

                @media only screen and (max-width: 610px) {

                    .mainContent {
                        margin: 76px 16px 0 16px;
                    }

                }
            
            `}</style>

        </Layout>

    }

} 

export default Review;