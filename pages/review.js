import React from 'react'
import Layout from '../components/Layout';
import Link from 'next/link'
import CheckoutProduct from '../components/CheckoutProduct';
import Router from "next/router";
import { withRouter } from 'next/router';
import { buildCheckout } from '../lib/apiRequester'
import { countries } from '../public/countriesRegions'
import isEmail from 'validator/lib/isEmail';
import { isValidNumber, isValidZip, formatNumber } from '../lib/validators';
import {  getUserCart, deleteCart} from '../lib/userAuth';
let loading = false;

export class Review extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            numberOfItems: 8,
            total: 0,
            value: 0,
            shipping: 0,
            tax: 0,

            shippingInfo: undefined,

            products: [
            ],

            sameAsShipping: false,

            billingfirstName: "",
            billinglastName: "",
            billingemail: "",
            billingphone: "",
            billingaddress: "",
            billingunit: "",
            billingcity: "",
            billingzip: "",
            billingcountry: "",
            billingprovince: "",

            errors: {
                firstNameError: "",
                lastNameError: "",
                emailError: "",
                phoneError: "",
                addressError: "",
                unitError: "",
                cityError: "",
                zipError: "",
                countryError: "",
                provinceError: ""
            }
        }

        this.getTotal = this.getTotal.bind(this);
    }

    getSubTotal(product) {
        return (product.price * (1 - product.discount)) * product.quantity;
    }

    getTotal(cart) {

        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            total += this.getSubTotal(cart[i]);
        }

        return total;
    }

    handleChange = (e) => {
        
        if (e.target.name === "billingphone") {

            let number = formatNumber(e.target.value.trim());
            e.target.value = number;
            this.setState({...this.state, [e.target.name]: number});

        } else if (e.target.name === "sameAsShipping") {
            this.setState({...this.state, [e.target.name]: e.target.checked});
        } else {
            this.setState({...this.state, [e.target.name]: e.target.value.trim()});
        }

    }

    validate = (formData) => {

        let errors = {
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            phoneError: "",
            addressError: "",
            unitError: "",
            cityError: "",
            zipError: "",
            countryError: "",
            provinceError: ""
        };

        if (this.state.sameAsShipping && this.state.shippingInfo) {

            this.setState({...this.state, errors});
            return true;
        }

        let valid = true;

        Object.entries(formData).forEach((item) => {
            if (item[1] === "" && item[0] !== "unit") {
                valid = false
                errors = {...errors, [item[0] + "Error"]: "Cannot be empty"}
            }
        });

        if (!isEmail(formData.email)) {
            errors.emailError = "Invalid Email";
        }

        if (!isValidNumber(formData.phone)) {
            errors.phoneError = "Invalid Phone Number";
        }

        if (!isValidZip(formData.zip)) {
            errors.zipError = "Expected Format: A1A 1A1";
        }

        this.setState({...this.state, errors});

        return valid;

    }

    handleSubmit = (e) => {
        e.preventDefault();
        loading = true;

        let formData = (this.state.sameAsShipping && this.state.shippingInfo) 
        ? this.state.shippingInfo
        : {
            firstName: this.state.billingfirstName,
            lastName: this.state.billinglastName,
            email: this.state.billingemail,
            phone: this.state.billingphone,
            address: this.state.billingaddress,
            unit: this.state.billingunit,
            city: this.state.billingcity,
            zip: this.state.billingzip,
            country: this.state.billingcountry,
            province: this.state.billingprovince
        }

        if (this.validate(formData) && this.state.shippingInfo) {

            buildCheckout(formData, this.state.products, {price: this.state.total, quantity: this.state.numberOfItems, address: formData.address})
            .then((data) => {

                if (data.message === "ok") {
                    loading = false;
                    Router.push(`/confirmation?orderNumber=${data.orderNumber}`, "/confirmation");
                }

            });
        }
        loading = false;

    }

    componentDidMount() {

        loading = false;

        const { router } = this.props;
        let cart =  getUserCart();
        let value = this.getTotal(cart);

        let shipping = (value > 200) ? 0 : 20;

        let tax = value * 0.13;

        let total = value + shipping + tax;



        let shippingInfo = undefined;

        let num = 0; 
        cart.forEach((item)=>{
            num += item.quantity
        });
        
        if (router.query.formData) {
            shippingInfo = JSON.parse(router.query.formData)
        } 
        


        this.setState({...this.state, total: total.toFixed(2), 
                                      value: value.toFixed(2), 
                                      tax: tax.toFixed(2), 
                                      shipping: shipping.toFixed(2),
                                      shippingInfo,products: (cart) ? cart : [] ,numberOfItems : num}
                                      );
    }
    render() {

        return <Layout fullPage={false}>

            <div className="mainContent">

                <h1>REVIEW & PAY</h1>

                <div className="content">
                    <div className="cartItems">
                        {this.state.products.map((product, i) => {
                            
                            return <CheckoutProduct product={product} key={i}/>
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
                        
                        <h1>Billing Information</h1>
                        
                        <form className="shippingInfo" autoComplete="on" onSubmit={this.handleSubmit}>
                            <div className="formInputs">
                                <div className="container formLeft">
                                    <label htmlFor="billingfirstName" className={`${(this.state.billingfirstName !== "") ? "text": ""}`}>First Name</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.firstNameError) ? "error" : ""} ${(this.state.billingfirstName !== "") ? "text": ""}`} 
                                        name="billingfirstName" type="text" placeholder="First name" autoComplete="given-name"/>
                                    <p className="error">{this.state.errors.firstNameError}</p>
                                </div>
                                <div className="container formRight">
                                    <label htmlFor="billinglastName" className={`${(this.state.billinglastName !== "") ? "text": ""}`}>Last name</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.lastNameError) ? "error" : ""} ${(this.state.billinglastName !== "") ? "text": ""}`}  
                                        name="billinglastName" type="text" placeholder="Last name" autoComplete="family-name"/>
                                    <p className="error">{this.state.errors.lastNameError}</p>
                                </div>
                                <div className="container formLeft">
                                    <label htmlFor="billingemail" className={`${(this.state.billingemail !== "") ? "text": ""}`}>Email address</label>
                                    <input onChange={this.handleChange}
                                        className={`${(this.state.errors.emailError) ? "error" : ""} ${(this.state.billingemail !== "") ? "text": ""}`}  
                                        name="billingemail" type="email" placeholder="Email address" autoComplete="email"/>
                                    <p className="error">{this.state.errors.emailError}</p>
                                </div>
                                <div className="container formRight">
                                    <label htmlFor="billingphone" className={`${(this.state.billingphone !== "") ? "text": ""}`}>Phone number</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.phoneError) ? "error" : ""} ${(this.state.billingphone !== "") ? "text": ""}`} 
                                        name="billingphone" type="tel" placeholder="Phone number" autoComplete="tel-national"/>
                                    <p className="error">{this.state.errors.phoneError}</p>
                                </div>
                                <div className="container formLeftLong">
                                    <label htmlFor="billingaddress" className={`${(this.state.billingaddress !== "") ? "text": ""}`}>Address</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.addressError) ? "error" : ""} ${(this.state.billingaddress !== "") ? "text": ""}`} 
                                        name="billingaddress" type="text" placeholder="Address" autoComplete="street-address"/>
                                    <p className="error">{this.state.errors.addressError}</p>
                                </div>
                                <div className="container formRightShort">
                                    <label htmlFor="billingunit" className={`${(this.state.billingunit !== "") ? "text": ""}`}>Unit, suite, etc.</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.unitError) ? "error" : ""} ${(this.state.billingunit !== "") ? "text": ""}`} 
                                        name="billingunit" type="text" placeholder="Unit, suite, etc." autoComplete="on"/>
                                    <p className="error">{this.state.errors.unitError}</p>
                                </div>
                                <div className="container formLeftLong">
                                    <label htmlFor="billingcity" className={`${(this.state.billingcity !== "") ? "text": ""}`}>City</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.cityError) ? "error" : ""} ${(this.state.billingcity !== "") ? "text": ""}`} 
                                        name="billingcity" type="text" placeholder="City" autoComplete="address-level2"/>
                                    <p className="error">{this.state.errors.cityError}</p>
                                </div>
                                <div className="container formRightShort">
                                    <label htmlFor="billingzip" className={`${(this.state.billingzip !== "") ? "text": ""}`}>Postal / ZIP code</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.zipError) ? "error" : ""} ${(this.state.billingzip !== "") ? "text": ""}`} 
                                        name="billingzip" type="text" placeholder="Postal / ZIP code" autoComplete="postal-code"/>
                                    <p className="error">{this.state.errors.zipError}</p>
                                </div>
                                <div className="container formLeft">
                                    <label htmlFor="billingcountry" className={`${(this.state.billingcountry !== "") ? "text": ""}`}>County / Region</label>
                                    <select onChange={this.handleChange} name="billingcountry" 
                                        className={`CountyRegion ${(this.state.errors.countryError) ? "error" : ""} ${(this.state.billingcountry !== "") ? "text": ""}`}
                                        autoComplete="billingcountry">
                                        <option value="" defaultChecked>County / Region</option>
                                        {countries.countries.map((item, i) => {
                                            return <option key={i} value={item.name}>{item.name}</option>
                                        })}
                                    </select>
                                    <p className="error">{this.state.errors.countryError}</p>
                                </div>
                                <div className="container formRight">
                                    <label htmlFor="billingprovince" className={`${(this.state.billingprovince !== "") ? "text": ""}`}>Province / State</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.provinceError) ? "error" : ""} ${(this.state.billingprovince !== "") ? "text": ""}`} 
                                        name="billingprovince" type="text" placeholder="Province / State" autoComplete="address-level1"/>
                                    <p className="error">{this.state.errors.provinceError}</p>
                                </div>
                            </div>

                            <div className="checkBoxContainer">
                                <input onChange={this.handleChange} name="sameAsShipping" className="checkbox" type="checkbox"/>
                                <label className="checkboxLabel">Same as shipping information</label>
                            </div>
                            
                            <button className="submit" type="submit" className="reviewBtn"
                                    disabled={loading}>PAY</button>
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

} 

export default withRouter(Review);