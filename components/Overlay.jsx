
import React from 'react';
import Link from 'next/link';

import styles from "../css/Overlay.module.css";

import { getOverlay } from "../lib/apiRequester";

export class Overlay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            arivals: [
                {name: "View All", link: "/categories", filter: "new"}
            ],

            category: [
                {name: "View All", link: "/categories", filter: ""},
                {name: "Shirts", link: "/categories", filter: "shirts"},
                {name: "T-shirts", link: "/categories", filter: "t-shirts"},
                {name: "Sweaters & Cardigans", link: "/categories", filter: "sweaters"},
                {name: "Pants", link: "/categories", filter: "pants"},
                {name: "Jeans", link: "/categories", filter: "jeans"},
                {name: "Joggers", link: "/categories", filter: "joggers"}
            ]

        }
    }

    getLink(item) {

        let link = item.link;

        if (item.filter !== "") {
            return {pathname: link, query: {mainCategory: this.props.category, subCategory: item.filter}};
        }
        return {pathname: link, query: {mainCategory: this.props.category}};
    }

    async componentDidMount() {

        await console.log("init");

        let data = await getOverlay("male");

        console.log(data);

        this.setState({data: data});
    }

    render() {

        document.documentElement.style.setProperty("--overlayOffset", (112 + this.props.offset) + "px");

        return <div className={styles.overlay}>

            <div>
                <h4 className={styles.title}>New Arrivals</h4>
                <ul className={styles.list}>
                    {this.state.arivals.map((item, i) => {
                        return <li key={i}><Link href={this.getLink(item)} passHref><a>{item.name}</a></Link></li>
                    })}
                </ul>
            </div>

            <div>
                <h4 className={styles.title}>Shop by Category</h4>
                <ul className={styles.list}>
                    {this.state.category.map((item, i) => {
                        return <li key={i}><Link href={this.getLink(item)} passHref><a>{item.name}</a></Link></li>
                    })}
                </ul>
            </div>

        </div>;

    }

}