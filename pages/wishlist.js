import React from 'react'
import Layout from '../components/layout';
import Link from 'next/link';
import ItemDisplayBox from '../components/ItemDisplayBox';
import { withRouter } from 'next/router';
import {getUserWishList} from '../lib/userAuth'; 
export class Wishlist extends React.Component {
//get wish list
//put wishlist in 'value' of itemdisplaybox
    constructor(props) {
        super(props);

        const { router } = this.props;

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
            ],
            showMore: 1,
            query: router.query,
            products : []
        }

        this.showMore = this.showMore.bind(this);

    }

    getTitle() {

        const { router } = this.props;
        let title = router.query.mainCategory;

        if (router.query.subCategory) {
            title += " " + router.query.subCategory;
        }

        return title;
    }

    componentDidMount() {
        document.documentElement.style.setProperty("--showMore", 1);
        let wishlist =  getUserWishList();
        this.setState({...this.state, products: wishlist});
    }
  
    getLink(item) {

        const { router } = this.props;

        let link = item.link;

        if (item.filter !== "") {
            return {pathname: link, query: {mainCategory: router.query.mainCategory, subCategory: item.filter}};
        }
        return {pathname: link, query: {mainCategory: router.query.mainCategory}};
    }

    showMore() {
        document.documentElement.style.setProperty("--showMore", this.state.showMore + 1);
        this.setState({...this.state, showMore: this.state.showMore + 1})
    }
    

    render() {

        let products = [];
        if ( this.state.products !== undefined &&this.state.products.length !== 0){
            for (let i = 0; i < this.state.products.length; i++) {
                products.push(<ItemDisplayBox key={i} value={this.state.products[i]}/>);
            }
        }else {
            products.push(<h3 key={0}>You current have no items in your wishlist</h3>);
        }
        return <Layout fullPage={false}>

            <div className="mainContent">
                    <h1>WISHLIST</h1>

                    <div className="products">
                        {products}
                    </div>

                    {/* <button onClick={this.showMore} className="loadMore">LOAD MORE</button> */}
            </div>

            <style jsx>{`
            
                .sidenav {
                    height: calc(100% - 80px - 16px + var(--footerHeight));
                    top:80px;
                    width: 180px;
                    position: absolute;
                    z-index: 1;
                    left: 0px;
                    background: var(--backgroundColor);
                    overflow-x: hidden;
                    padding-left: 32px;
                    padding-top: 16px
                }

                .mainContent {
                    position: relative;
                    /* height: calc(100% - 80px - 16px + var(--footerHeight)); */
                    min-height: 100%;
                    /* top: 80px; */
                    padding-top: 16px;

                    width: calc(100% - 138px);
                    margin-left: 138px;

                }

                .products {
                    display: grid;
                    grid-row-gap: 8px;
                    grid-column-gap: 32px;
                    grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
                }

                .filterby label {
                    margin-right: 24px;
                }

                .filterby select, .filterby option {
                    font-family: 'Open Sans';
                    font-weight: normal;
                    font-size: 14px;
                    min-width: 50px;
                }

                .filterby select {
                    border:0px;
                    outline:0px;
                }

                .filterby option {
                    border: 1px solid black;
                    outline: none;
                }

                .filterPannel {
                    position: relative;
                    width: 110px;
                    height: 32px;
                    border: 0.5px solid black;
                    margin: 12px 0;
                }

                .filterPannel span {
                    position: absolute;
                    left: 12px;
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;
                    top: 6px;
                }

                .filterPannel img {
                    position: absolute;
                    right: 12px;
                    top: 8px;
                }

                .sortBy {
                    position: relative;
                    margin: 24px 0;
                }

                .sortBy label {
                    margin-right: 24px;
                }

                .sortBy label:not(:first-child) {
                    font-family: 'Open Sans';
                    font-weight: normal;
                    font-size: 14px;
                }

                .loadMore {

                    border: none;

                    width: 294px;
                    height: 32px;

                    margin: 32px 0;
                    padding: 0;

                    left: calc(50% - 294px/2);

                    background: var(--highlightColor);

                    position: relative;

                }

                h1 {
                    font-size: 32px;
                    line-height: 37px;
                    font-weight: bold;
                    text-transform: uppercase;
                    margin: 0;
                    margin-bottom: 32px;
                }

                h4 {
                    font-family: "Open Sans";
                    margin-top:0;
                    /* margin-right: 73px; */
                    font-weight: bold;
                }

                ul {
                    list-style: none;
                    padding: 0;
                }

                ul li {
                    margin-top: 12px;
                }

                ul li a {
                    font-family: "Open Sans";
                    font-weight: normal;
                    font-size: 14px;
                }

                @media only screen and (max-width: 1000px) {
                    .sidenav {
                        left: -230px;
                    }

                    .mainContent {
                        margin-left: 32px;
                        width: calc(100% - (2 * 32px));
                    }

                }

                @media only screen and (max-width: 815px) {

                    .products {
                        justify-content: center;
                    }

                }

                @media only screen and (max-width: 610px) {

                    .mainContent {
                        margin-top: 32px;
                    }
                }


            `}</style>
        </Layout>

    }

}

export default withRouter(Wishlist);