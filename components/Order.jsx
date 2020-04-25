import React from 'react';
import styles from "../css/Order.module.css";
import Link from 'next/link';
import Router from 'next/router';

export default class Order extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {

            numberShown: 8
        }
    }

    calcWidth = (windowWidth) => {

        if (windowWidth < 1110) {
            return 1;
        }

        let shown = Math.floor((windowWidth - (192 * 2) - (windowWidth * 0.2) - (windowWidth * 0.15)) / (8 + 95));

        return shown;
        // return (shown < 7) ? shown : 7;

    }

    handleResize = () => {
        this.setState({width: window.innerWidth, numberShown: this.calcWidth(window.innerWidth)});
    }

    componentDidMount() {

        this.handleResize();
        window.addEventListener('resize', this.handleResize)

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    
    openOrder = () => {
        Router.push(`/orderReview?orderNumber=${this.props.order.orderNumber}`);
    }

    render() {

        return <div className={styles.order}>

            <div className={styles.info}>
                <label>Order ID: {this.props.order.orderNumber}</label>
                <label className={styles.sans}>{this.props.order.date}</label>
                <br/>
                <label className={styles.sans}>{`Cost: $${this.props.order.cost}`}</label>
                <label className={styles.sans}>{`Quantitiy: ${this.props.order.Quantity}`}</label>
                <label className={styles.sans}>{`Address: ${this.props.order.Address}`}</label>
            </div>

            <div className={styles.pictures}>
                {this.props.order.productImages.slice(0, this.state.numberShown).map((item, i) => {
                    return <div key={i}>
                        <img src={item}/>
                    </div>
                })}
                {(this.props.order.productImages.length > this.state.numberShown) 
                ? <div onClick={this.openOrder} className={styles.showMore}>
                <p>{`+${this.props.order.productImages.length - this.state.numberShown}`}</p>
                </div> : null}
            </div>

            <div className={styles.buttons}>
                <button onClick={this.openOrder} className={styles.details}>DETAILS</button>
                <button className={styles.track}>TRACK</button>
            </div>


        </div>

    }

}