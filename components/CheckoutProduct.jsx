import React from 'react';
import styles from "../css/CheckoutProduct.module.css";

/**
 * Defines the component for the look and functionality of a Checkout product
 * 
 * @author Aaron Exley
 * @author Chris Labatt
 */
export class CheckoutProduct extends React.Component {

    /**
     * @param {*} props the product to display
     */
    constructor(props){
        super(props);

        this.state = {
            highlightColor: ""
        };

        this.getSubtotal = this.getSubtotal.bind(this);
        this.getAdjustedPrice = this.getAdjustedPrice.bind(this);
    }

    /**
     * Gets the subtotal for the price
     */
    getSubtotal() {
        if(this.props.product.discount == 0){
            return Math.round((this.props.product.price * this.props.product.quantity) * 100) / 100;
        }
        else{
            return Math.round((this.getAdjustedPrice() * this.props.product.quantity) * 100) / 100;
        }
    }

    /**
     * Gets the sale price for the product
     */
    getAdjustedPrice(){
        return Math.round((this.props.product.price * (1 - this.props.product.discount)) * 100) / 100
    }
    
    /**
     * Render the componenet
     */
    render(){

        let highlightColor = "#FFF500";
        if (typeof window !== 'undefined') {
            highlightColor = window.getComputedStyle(document.documentElement).getPropertyValue('--highlightColor');
        }
        
        return <div className={styles.CheckoutProduct}>
            <img className={styles.CheckoutImage} src = {`data:image/png;base64,${this.props.product.image}`}></img>
            <div className={styles.CheckoutInfo}>
                <p>{this.props.product.productName}</p>
                {(this.props.product.discount > 0) ? <p className={styles.CheckoutDiscount} style={{background: highlightColor}}>${this.getAdjustedPrice()}</p> : null}
                {(this.props.product.discount > 0) ? <p className={styles.CheckoutOldPrice}>${this.props.product.price.toFixed(2)}</p> : <p>${this.props.product.price.toFixed(2)}</p>}
                <table className={styles.CheckoutSpecs}>
                    <tbody>
                        <tr>
                            <td>Colour:</td>
                            <td>{this.props.product.colour}</td>
                        </tr>
                        <tr>
                            <td>Size:</td>
                            <td>{this.props.product.size}</td>
                        </tr>
                        <tr>
                            <td>Quantity:</td>
                            <td>{this.props.product.quantity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.CheckoutPrice}>
                ${this.getSubtotal().toFixed(2)}
            </div>
        </div>
    }
}

export default CheckoutProduct;