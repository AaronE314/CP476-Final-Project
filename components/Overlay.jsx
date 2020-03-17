
import React from 'react';

import styles from "../css/Overlay.module.css";

export class Overlay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            arivals: [
                "View All"
            ],

            category: [
                "View All",
                "Shirts",
                "T-shirts",
                "Sweaters & Cardigans",
                "Pants",
                "Jeans",
                "Joggers"
            ]

        }

    }

    render() {

        return <div className={styles.overlay}>

            <div>
                <h4 className={styles.title}>New Arrivals</h4>
                <ul className={styles.list}>
                    {this.state.arivals.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>

            <div>
                <h4 className={styles.title}>Shop by Category</h4>
                <ul className={styles.list}>
                    {this.state.category.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>

        </div>;

    }

}