import React from 'react';
import styles from "../css/CheckoutProduct.module.css";

export class CheckoutProduct extends React.Component{
    render(){
        return <div className={styles.CheckoutProduct}>
            <img className={styles.CheckoutImage} src = ""></img>
            <div className={styles.CheckoutInfo}>
                <p>Product Name</p>
                <p>$3.99</p>
                <table className={styles.CheckoutSpecs}>
                    <tr>
                        <td>Colour:</td>
                        <td>Black</td>
                    </tr>
                    <tr>
                        <td>Size:</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>Quantity:</td>
                        <tb>1</tb>
                    </tr>
                </table>
            </div>
            <div className={styles.CheckoutPrice}>
                $3.99
            </div>
        </div>
    }
}

export default CheckoutProduct;