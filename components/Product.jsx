import React from 'react';
import styles from "../css/Product.module.css";


export class Product extends React.Component {

    render() {

    return <div className={styles.Product}>
            <div className={styles.ImageBox}>
                <img/>
            </div>
            <div className={styles.Container}>
                <table>
                    <tr>
                        <td><p className={styles.ProdName}>Product Name</p></td>
                        <td><p className={styles.Price}>$3.99</p></td>
                    </tr>
                </table>

                <table className={styles.ProductTable}>
                    <tr>
                        <td><p>Item no:</p></td>
                        <td><p>0850318003</p></td>
                    </tr>
                    <tr>
                        <td><p>Color:</p></td>
                        <td><p>Black</p></td>
                    </tr>
                    <tr>
                        <td><p>Size:</p></td>
                        <td><p>S</p></td>
                    </tr>
                    <tr>
                        <td><p>SubTotal:</p></td>
                        <td><p>$3.99</p></td>
                    </tr>
                    <tr>
                        <td><img/></td>
                        <td>
                            <div>
                            <img/>
                            <p>1</p>
                            <img/>

                            </div>

                        </td>
                    </tr>
                </table>
            </div>
        </div>;

    }

}

export default Product;