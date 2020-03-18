import React from 'react';
import styles from "../css/CheckoutProduct.module.css";

export class CheckoutProduct extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            productName: "Product Name",
            quantity: 1,
            price: 3.99,
            discount: 0.1,
            size: "S",
            colour: "Black",
            imageLink: "",
            highlightColor: ""
        };
        this.getSubtotal = this.getSubtotal.bind(this);
        this.getAdjustedPrice = this.getAdjustedPrice.bind(this);
    }

    getSubtotal(){
        if(this.state.discount == 0){
            return Math.round((this.state.price * this.state.quantity) * 100) / 100;
        }
        else{
            return Math.round((this.getAdjustedPrice() * this.state.quantity) * 100) / 100;
        }
    }

    getAdjustedPrice(){
        return Math.round((this.state.price * (1 - this.state.discount)) * 100) / 100
    }
    
    render(){
        this.state.highlightColor = getComputedStyle(document.documentElement).getPropertyValue('--highlightColor');
        return <div className={styles.CheckoutProduct}>
            <img className={styles.CheckoutImage} src = {this.state.imageLink}></img>
            <div className={styles.CheckoutInfo}>
                <p>{this.state.productName}</p>
                {(this.state.discount > 0) ? <p className={styles.CheckoutDiscount} style={{background: this.state.highlightColor}}>${this.getAdjustedPrice()}</p> : null}
                {(this.state.discount > 0) ? <p className={styles.CheckoutOldPrice}>${this.state.price.toFixed(2)}</p> : <p>${this.state.price.toFixed(2)}</p>}
                <table className={styles.CheckoutSpecs}>
                    <tr>
                        <td>Colour:</td>
                        <td>{this.state.colour}</td>
                    </tr>
                    <tr>
                        <td>Size:</td>
                        <td>{this.state.size}</td>
                    </tr>
                    <tr>
                        <td>Quantity:</td>
                        <tb>{this.state.quantity}</tb>
                    </tr>
                </table>
            </div>
            <div className={styles.CheckoutPrice}>
                ${this.getSubtotal().toFixed(2)}
            </div>
        </div>
    }
}

export default CheckoutProduct;