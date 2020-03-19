import React from 'react'
import Layout from '../components/layout';
import Link from 'next/link';
import ItemDisplayBox from '../components/ItemDisplayBox';
import { withRouter } from 'next/router';

export class Categories extends React.Component {

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
            query: router.query
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
    }
  
    getLink(item) {

        let link = item.link;

        if (item.filter !== "") {
            return {pathname: link, query: {mainCategory: this.state.query.mainCategory, subCategory: item.filter}};
        }
        return {pathname: link, query: {mainCategory: this.state.query.mainCategory}};
    }

    showMore() {
        document.documentElement.style.setProperty("--showMore", this.state.showMore + 1);
        this.setState({...this.state, showMore: this.state.showMore + 1})
    }
    

    render() {

        let products = [];

        for (let i = 0; i < 100; i++) {
            products.push(<ItemDisplayBox key={i}/>);
        }

        

        return <Layout>

            <div className="sidenav">

                <div>
                    <h4>New Arrivals</h4>
                    <ul>
                        {this.state.arivals.map((item, i) => {
                            return <li key={i}><Link href={this.getLink(item)} passHref><a>{item.name}</a></Link></li>
                        })}
                    </ul>
                </div>

                <div>
                    <h4>Shop by Category</h4>
                    <ul>
                        {this.state.category.map((item, i) => {
                            return <li key={i}><Link href={this.getLink(item)} passHref><a>{item.name}</a></Link></li>
                        })}
                    </ul>
                </div>

            </div>

            <div className="mainContent">
                    <h1>{this.getTitle()}</h1>

                    <div className="filterby">
                        <label>Filter By</label>
                        <select className="price">
                            <option defaultValue>Price</option>
                            <option>$0-%50</option>
                            <option>$50-%100</option>
                        </select>
                        <select className="title">
                            <option defaultValue>Filter Title</option>
                            <option>?</option>
                            <option>?</option>
                        </select>
                        <div className="filterPannel">
                            <span>$0 - $50</span>
                            <img src="/images/close.svg"/>
                        </div>
                    </div>

                    <div className="sortBy">
                        <label>Sort By</label>

                        <input defaultChecked id="recommended" type="radio" name="sortBy"/>
                        <label htmlFor="recommended">Recommended</label>
                        <input id="newest" type="radio" name="sortBy"/>
                        <label  htmlFor="newest">Newest</label>
                        <input id="lowest" type="radio" name="sortBy"/>
                        <label  htmlFor="lowest">Lowest Price</label>
                        <input id="highest" type="radio" name="sortBy"/>
                        <label htmlFor="highest">Highest Price</label>
                    </div>

                    <div className="products">
                        {products}
                    </div>

                    <button onClick={this.showMore} className="loadMore">LOAD MORE</button>
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

                    width: calc(100% - 244px);
                    margin-left: 244px;

                }

                .products {
                    display: grid;
                    grid-row-gap: 8px;
                    grid-column-gap: 32px;
                    grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));

                    /* super jank */
                    max-height: calc(1082px * var(--showMore));
                    overflow: hidden;
                }

                .filterby label {
                    margin-right: 24px;
                }

                .filterby select, .filterby option {
                    font-family: Open Sans;
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
                    font-family: Open Sans;
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
                    font-family: Open Sans;
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

                [type="radio"]:checked,
                [type="radio"]:not(:checked) {
                    position: absolute;
                    left: -9999px;
                }
                [type="radio"]:checked + label,
                [type="radio"]:not(:checked) + label
                {
                    position: relative;
                    padding-left: 28px;
                    cursor: pointer;
                    line-height: 20px;
                    display: inline-block;
                    color: var(--foregroundColor);
                }
                [type="radio"]:checked + label:before,
                [type="radio"]:not(:checked) + label:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 18px;
                    height: 18px;
                    border: 1px solid var(--foregroundColor);
                    border-radius: 100%;
                    background: var(--backgroundColor);
                }
                [type="radio"]:checked + label:after,
                [type="radio"]:not(:checked) + label:after {
                    content: '';
                    width: 18px;
                    height: 18px;
                    background: var(--highlightColor);
                    position: absolute;
                    top: 1px;
                    left: 1px;
                    border-radius: 100%;
                    -webkit-transition: all 0.2s ease;
                    transition: all 0.2s ease;
                }
                [type="radio"]:not(:checked) + label:after {
                    opacity: 0;
                    -webkit-transform: scale(0);
                    transform: scale(0);
                }
                [type="radio"]:checked + label:after {
                    opacity: 1;
                    -webkit-transform: scale(1);
                    transform: scale(1);
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


            `}</style>
        </Layout>

    }

}

export default withRouter(Categories);