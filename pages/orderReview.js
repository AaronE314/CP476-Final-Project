import React, { useEffect, useState } from 'react'
import Layout from '../components/layout';
import Link from 'next/link'
import CheckoutProduct from '../components/CheckoutProduct';
import Router, { useRouter } from "next/router";
import { withRouter } from 'next/router';
import { isSignedIn} from '../lib/userAuth';
import {getSingleOrder} from '../lib/apiRequester';
import { countries } from '../public/countriesRegions'
import isEmail from 'validator/lib/isEmail';
import { isValidNumber, isValidZip, formatNumber } from '../lib/validators';

const OrderReview = (props) => {

    const router = useRouter();
    const [numberOfItems, setNumberOfItems] = useState(8);
    const [total, setTotal] = useState(0);
    const [value, setValue] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [tax, setTax] = useState(0);
    const [orderNumber, setOrderNumber] = useState("");

    const getSubTotal = (product) => {
        return (product.price * (1 - product.discount)) * product.quantity;
    }

    const getTotal = () => {

        let total = 0;

        for (let i = 0; i < props.products.length; i++) {
            total += getSubTotal(props.products[i]);
        }

        return total;
    }

    useEffect(() => {

        let tempValue = getTotal();

        let tempShipping = (value > 200) ? 0 : 20;

        let tempTax = value * 0.13;

        let tempTotal = tempValue + tempShipping + tempTax;

        // let shippingInfo = {
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     phone: "",
        //     address: "",
        //     unit: "",
        //     city: "",
        //     zip: "",
        //     country: "",
        //     province: ""
        // }

        // console.log(router.query.formData);
        
        // if (router.query.formData) {
        //     shippingInfo = JSON.parse(router.query.formData)
        // } 

        setTotal(tempTotal.toFixed(2));
        setValue(tempValue.toFixed(2));
        setTax(tempTax.toFixed(2));
        setShipping(tempShipping.toFixed(2));
        setOrderNumber(router.query.orderNumber);
    });

    return <Layout fullPage={false}>

        <div className="mainContent">

            <h1>{`ORDER ${orderNumber}`}</h1>

            <div className="content">
                <div className="cartItems">
                    <h1>Order Summary</h1>
                    {props.products.map((product, i) => {
                        
                        return <CheckoutProduct product={product} key={product.orderNumber}/>
                    })}
                    <div className="subTotals">
                        <div className="value">
                            <label>Order value</label>
                            <label className="right">{`CAD $${value}`}</label>
                        </div>
                        <div className="value">
                            <label>Shipping</label>
                            <label className="right">{`CAD $${shipping}`}</label>
                        </div>
                        <div className="value">
                            <label>Tax</label>
                            <label className="right">{`CAD $${tax}`}</label>
                        </div>
                    </div>
                    <div className="total">
                        <label>Total</label>
                        <label className="right">{`CAD $${total}`}</label>
                    </div>
                </div>
                <div className="shipping">
                    
                    <h1>Billing Information</h1>
                    
                    <form className="shippingInfo" autoComplete="on" onSubmit={e => {e.preventDefault()}}>
                        <div className="formInputs">
                            <div className="container formLeft">
                                <label htmlFor="firstName" className={`${(props.firstName !== "") ? "text": ""}`}>First Name</label>
                                <input value={props.firstName} readOnly 
                                    className={`${(props.firstName !== "") ? "text": ""}`} 
                                    name="firstName" type="text" placeholder="First name" autoComplete="given-name"/>
                            </div>
                            <div className="container formRight">
                                <label htmlFor="lastName" className={`${(props.lastName !== "") ? "text": ""}`}>Last name</label>
                                <input value={props.lastName} readOnly 
                                    className={`${(props.lastName !== "") ? "text": ""}`}  
                                    name="lastName" type="text" placeholder="Last name" autoComplete="family-name"/>
                            </div>
                            <div className="container formLeft">
                                <label htmlFor="email" className={`${(props.email !== "") ? "text": ""}`}>Email address</label>
                                <input value={props.email} readOnly                                         
                                    className={`${(props.email !== "") ? "text": ""}`}  
                                    name="email" type="email" placeholder="Email address" autoComplete="email"/>
                            </div>
                            <div className="container formRight">
                                <label htmlFor="phone" className={`${(props.phone !== "") ? "text": ""}`}>Phone number</label>
                                <input value={props.phone} readOnly 
                                    className={`${(props.phone !== "") ? "text": ""}`} 
                                    name="phone" type="tel" placeholder="Phone number" autoComplete="tel-national"/>
                            </div>
                            <div className="container formLeftLong">
                                <label htmlFor="address" className={`${(props.address !== "") ? "text": ""}`}>Address</label>
                                <input value={props.address} readOnly 
                                    className={`${(props.address !== "") ? "text": ""}`} 
                                    name="address" type="text" placeholder="Address" autoComplete="street-address"/>
                            </div>
                            <div className="container formRightShort">
                                <label htmlFor="unit" className={`${(props.unit !== "") ? "text": ""}`}>Unit, suite, etc.</label>
                                <input value={props.unit} readOnly 
                                    className={`${(props.unit !== "") ? "text": ""}`} 
                                    name="unit" type="text" placeholder="Unit, suite, etc." autoComplete="on"/>
                            </div>
                            <div className="container formLeftLong">
                                <label htmlFor="city" className={`${(props.city !== "") ? "text": ""}`}>City</label>
                                <input value={props.city} readOnly 
                                    className={`${(props.city !== "") ? "text": ""}`} 
                                    name="city" type="text" placeholder="City" autoComplete="address-level2"/>
                            </div>
                            <div className="container formRightShort">
                                <label htmlFor="zip" className={`${(props.zip !== "") ? "text": ""}`}>Postal / ZIP code</label>
                                <input value={props.zip} readOnly 
                                    className={`${(props.zip !== "") ? "text": ""}`} 
                                    name="zip" type="text" placeholder="Postal / ZIP code" autoComplete="postal-code"/>
                            </div>
                            <div className="container formLeft">
                                <label htmlFor="country" className={`${(props.country !== "") ? "text": ""}`}>County / Region</label>
                                <select value={props.country} readOnly name="country" 
                                    className={`CountyRegion ${(props.country !== "") ? "text": ""}`}
                                    autoComplete="country">
                                    <option value="" defaultChecked>County / Region</option>
                                    {countries.countries.map((item, i) => {
                                        return <option key={i} value={item.name}>{item.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="container formRight">
                                <label htmlFor="province" className={`${(props.province !== "") ? "text": ""}`}>Province / State</label>
                                <input value={props.province} readOnly 
                                    className={`${(props.province !== "") ? "text": ""}`} 
                                    name="province" type="text" placeholder="Province / State" autoComplete="address-level1"/>
                            </div>
                        </div>
                        
                        <button className="submit" type="submit" className="reviewBtn">TRACK THIS ORDER</button>
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

            .shipping > h1, .cartItems > h1 {
                font-weight: normal;
                font-size: 32px;
                line-height: 37px;
            }

            .cartItems > h1 {
                margin-bottom: 0;
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
                grid-template-columns: 1fr 1fr 0.5fr 1.5fr;
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
                width: calc(100% - 16px);
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

            .shippingInfo input.text:focus, .shippingInfo select.text:focus {
                padding: 17px 8px 3px 8px;
            }


            .shippingInfo input.text, .shippingInfo select.text {
                padding: 17px 8px 4px 8px;
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

            .container {
                position: relative;
            }

            .container input.error {
                border-bottom: 1px solid #F44336;
            }

            .container p.error, p.error {
                color: #F44336;
                font-size: 12px;
                line-height: 16px;
                font-family: "Open Sans";
                font-weight: normal;
                margin-top: 6px;
                margin-bottom: 0;
                padding-left: 8px;
            }

            .container input:focus {
                outline: none;
                padding: 10px 8px 10px 8px;
                border-bottom: 1px solid var(--foregroundColor);
            }

            .container label {
                display: none
            }

            .container label.text {

                position: absolute;
                display: block;

                font-family: "Open Sans";
                font-style: normal;
                font-weight: normal;
                font-size: 10px;
                line-height: 14px;
                color: rgba(0, 0, 0);
                opacity: 0.54;

                top: 4px;
                left: 8px;

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
                    grid-template-columns: 100%;
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

OrderReview.getInitialProps = async (ctx) => {

    console.log("init");

    if (await isSignedIn()) {


        let orderNumber = ctx.query.orderNumber
        let order = await getSingleOrder(orderNumber);
        console.log(order);
        return {

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
            ],

            firstName: "John",
            lastName: "Doe",
            email: "johndoe@email.com",
            phone: "(123) 456-7890",
            address: "123 Street Ave.",
            unit: "Unit A",
            city: "Toronto",
            zip: "A1A 2B2",
            country: "Canada",
            province: "Ontario",
        }
    } else {
        console.log("not");
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

    
}

export default withRouter(OrderReview);