import React from 'react'
import Layout from '../components/Layout';
import Link from 'next/link'
import CheckoutProduct from '../components/CheckoutProduct';
import Router from "next/router";
import { withRouter } from 'next/router';
import { countries } from '../public/countriesRegions'
import isEmail from 'validator/lib/isEmail';
import { isValidNumber, isValidZip, formatNumber, validAddress } from '../lib/validators';
import {  getUserCart} from '../lib/userAuth';
export class Checkout extends React.Component {

    constructor(props) {
        super(props);
        

        this.state = {
            numberOfItems: 8,
            total: 0,
            products: [

            ],

            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            unit: "",
            city: "",
            zip: "",
            country: "",
            province: "",

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

    getTotal() {

        let total = 0;

        for (let i = 0; i < this.state.products.length; i++) {
            total += this.getSubTotal(this.state.products[i]);
        }

        return total;
    }

    handleChange = (e) => {

        if (e.target.name === "phone") {

            let number = formatNumber(e.target.value.trim());
            e.target.value = number;
            this.setState({...this.state, [e.target.name]: number});

        } else {
            this.setState({...this.state, [e.target.name]: e.target.value.trim()});
        }

    }

    validate = async (formData) => {

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

        if (!(await validAddress(formData.country, formData.address, formData.city, formData.province, formData.zip))) {
            errors.addressError = "Invalid Address";
        }

        this.setState({...this.state, errors});

        return valid;

    }

    handleSubmit = (e) => {
        e.preventDefault();

        let formData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            unit: this.state.unit,
            city: this.state.city,
            zip: this.state.zip,
            country: this.state.country,
            province: this.state.province
        }

        this.validate(formData).then(valid => {
            if (valid) {
                Router.push(`/review?formData=${JSON.stringify(formData)}&products=${JSON.stringify(this.state.products)}}`, "review");
            }
        })

        // if (this.validate(formData)) {
            
        // }

    }
    componentDidMount(){
        let cart =  getUserCart();
        // console.log("cart",cart)
        this.setState({...this.state, products: (cart) ? cart : []});
    }
    render() {

        return <Layout fullPage={false}>

            <div className="mainContent">

                <h1>SHIPPING INFO</h1>

                <div className="content">
                    <div className="leftSide">
                        <div className="edit">
                            <label className="title">Shopping Cart</label>
                            <Link href="/cart"><label className="editText">EDIT</label></Link>
                        </div>
                        <div className="cartItems">
                            {this.state.products.map((product, i) => {
                                
                                return <CheckoutProduct product={product} key={i}/>
                            })}
                            <div className="total">
                                <label>Total</label>
                                <label className="right">{`CAD $${this.getTotal().toFixed(2)}`}</label>
                            </div>
                        </div>
                    </div>
                    <div className="shipping">
                        
                        <h1>Shipping Information</h1>
                        
                        <form className="shippingInfo" autoComplete="on" method="post" onSubmit={this.handleSubmit}>
                            <div className="formInputs">
                                <div className="container formLeft">
                                    <label htmlFor="firstName" className={`${(this.state.firstName !== "") ? "text": ""}`}>First Name</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.firstNameError) ? "error" : ""} ${(this.state.firstName !== "") ? "text": ""}`} 
                                        name="firstName" type="text" placeholder="First name" autoComplete="given-name"/>
                                    <p className="error">{this.state.errors.firstNameError}</p>
                                </div>
                                <div className="container formRight">
                                    <label htmlFor="lastName" className={`${(this.state.lastName !== "") ? "text": ""}`}>Last name</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.lastNameError) ? "error" : ""} ${(this.state.lastName !== "") ? "text": ""}`}  
                                        name="lastName" type="text" placeholder="Last name" autoComplete="family-name"/>
                                    <p className="error">{this.state.errors.lastNameError}</p>
                                </div>
                                <div className="container formLeft">
                                    <label htmlFor="email" className={`${(this.state.email !== "") ? "text": ""}`}>Email address</label>
                                    <input onChange={this.handleChange}
                                        className={`${(this.state.errors.emailError) ? "error" : ""} ${(this.state.email !== "") ? "text": ""}`}  
                                        name="email" type="email" placeholder="Email address" autoComplete="email"/>
                                    <p className="error">{this.state.errors.emailError}</p>
                                </div>
                                <div className="container formRight">
                                    <label htmlFor="phone" className={`${(this.state.phone !== "") ? "text": ""}`}>Phone number</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.phoneError) ? "error" : ""} ${(this.state.phone !== "") ? "text": ""}`} 
                                        name="phone" type="tel" placeholder="Phone number" autoComplete="tel-national"/>
                                    <p className="error">{this.state.errors.phoneError}</p>
                                </div>
                                <div className="container formLeftLong">
                                    <label htmlFor="address" className={`${(this.state.address !== "") ? "text": ""}`}>Address</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.addressError) ? "error" : ""} ${(this.state.address !== "") ? "text": ""}`} 
                                        name="address" type="text" placeholder="Address" autoComplete="street-address"/>
                                    <p className="error">{this.state.errors.addressError}</p>
                                </div>
                                <div className="container formRightShort">
                                    <label htmlFor="unit" className={`${(this.state.unit !== "") ? "text": ""}`}>Unit, suite, etc.</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.unitError) ? "error" : ""} ${(this.state.unit !== "") ? "text": ""}`} 
                                        name="unit" type="text" placeholder="Unit, suite, etc." autoComplete="on"/>
                                    <p className="error">{this.state.errors.unitError}</p>
                                </div>
                                <div className="container formLeftLong">
                                    <label htmlFor="city" className={`${(this.state.city !== "") ? "text": ""}`}>City</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.cityError) ? "error" : ""} ${(this.state.city !== "") ? "text": ""}`} 
                                        name="city" type="text" placeholder="City" autoComplete="address-level2"/>
                                    <p className="error">{this.state.errors.cityError}</p>
                                </div>
                                <div className="container formRightShort">
                                    <label htmlFor="zip" className={`${(this.state.zip !== "") ? "text": ""}`}>Postal / ZIP code</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.zipError) ? "error" : ""} ${(this.state.zip !== "") ? "text": ""}`} 
                                        name="zip" type="text" placeholder="Postal / ZIP code" autoComplete="postal-code"/>
                                    <p className="error">{this.state.errors.zipError}</p>
                                </div>
                                <div className="container formLeft">
                                    <label htmlFor="country" className={`${(this.state.country !== "") ? "text": ""}`}>County / Region</label>
                                    <select onChange={this.handleChange} name="country" 
                                        className={`CountyRegion ${(this.state.errors.countryError) ? "error" : ""} ${(this.state.country !== "") ? "text": ""}`}
                                        autoComplete="country">
                                        <option value="" defaultChecked>County / Region</option>
                                        {countries.countries.map((item, i) => {
                                            return <option key={i} value={item.name}>{item.name}</option>
                                        })}
                                    </select>
                                    <p className="error">{this.state.errors.countryError}</p>
                                </div>
                                <div className="container formRight">
                                    <label htmlFor="province" className={`${(this.state.province !== "") ? "text": ""}`}>Province / State</label>
                                    <input onChange={this.handleChange} 
                                        className={`${(this.state.errors.provinceError) ? "error" : ""} ${(this.state.province !== "") ? "text": ""}`} 
                                        name="province" type="text" placeholder="Province / State" autoComplete="address-level1"/>
                                    <p className="error">{this.state.errors.provinceError}</p>
                                </div>
                            </div>
                            
                            <button className="submit" type="submit" className="reviewBtn">REVIEW & PAY</button>
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

                .shipping h1{
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

                .edit {
                    margin-top: 32px;
                }

                .edit .title {
                    font-family: "Roboto";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 32px;
                    line-height: 37px;
                }

                .edit .editText {
                    font-family: "Roboto";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 19px;
                    float: right;
                    margin-top: 9px;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
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

                .shippingInfo select {
                    width: 100%;
                }

                .shippingInfo input::placeholder {
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

export default withRouter(Checkout);