
import React from 'react';

import styles from "../css/Overlay.module.css";

export class Overlay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            arivals: [
                {name: "View All", link: "#"}
            ],

            category: [
                {name: "View All", link: "#"},
                {name: "Shirts", link: "#"},
                {name: "T-shirts", link: "#"},
                {name: "Sweaters & Cardigans", link: "#"},
                {name: "Pants", link: "#"},
                {name: "Jeans", link: "#"},
                {name: "Joggers", link: "#"}
            ]

        

        }
    }

    render() {

        // document.documentElement.style.setProperty("--overlayOffset", (112 + this.props.offset) + "px");

        return <div className={styles.overlay}>

            <div>
                <h4 className={styles.title}>New Arrivals</h4>
                <ul className={styles.list}>
                    {this.state.arivals.map((item, i) => {
                        return <li key={i}><a href={item.link}>{item.name}</a></li>
                    })}
                </ul>
            </div>

            <div>
                <h4 className={styles.title}>Shop by Category</h4>
                <ul className={styles.list}>
                    {this.state.category.map((item, i) => {
                        return <li key={i}><a href={item.link}>{item.name}</a></li>
                    })}
                </ul>
            </div>

        </div>;

    }

}