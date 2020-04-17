import React, {Fragment} from 'react'
import Layout from '../components/layout';
import { withRouter } from 'next/router';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export class ProductDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            productDetails: {
                name: "Product Name",
                price: "$3.99",
                colors: ["red", "black", "grey", "white", "yellow"],
                sizes: ["S", "M", "L", "XL"],
                
                images: ["/images/tempImages/tempImg1_1.jpg",
                         "/images/tempImages/tempImg1_2.jpg", 
                         "/images/tempImages/tempImg1_3.jpg", 
                         "/images/tempImages/tempImg2_1.jpg", 
                         "/images/tempImages/tempImg2_2.jpg",
                         "/images/tempImages/tempImg2_2.jpg"],
                
                description: `Casual modernity. Designed from pure cotton, this jacket is reimagined with a waist belt and a cropped length.\n
                \n
                - A-line fit\n
                - Pointed collar\n
                - Zip-up front\n
                - Long sleeves\n
                - Two side pockets 100% Cotton / Machine washable\n
                \n
                Back length of size S is 66.5cm / Model is 180cm tall and wearing a size S`,
            },    

            tempBackground: ["#F0F0F0", "#D4F6C8", "#B4D5F3", "#CFC3EB", "#DE9CCC"],

            size: -1,
            color: -1
            
        }

        this.setColor = this.setColor.bind(this);
        this.setSize = this.setSize.bind(this);

    }

    setColor(i) {

        let color = i;

        if (this.state.color === i) {
            color = -1;
        }

        this.setState({...this.state, color: color});
    }

    setSize(i) {

        let size = i;

        if (this.state.size === i) {
            size = -1;
        }

        this.setState({...this.state, size: size});
    }

    render() {

        const { router } = this.props;

        return <Layout>
            <div className="container">
                {/* 12.6% */}
                <div className="smallPicturesContainer sticky">
                    <div className="smallPictures">
                        {this.state.productDetails.images.map((item, i) => {
                            return <AnchorLink key={i} href={`#img${i}`}>
                                <div className="smallImage" style={{background: this.state.tempBackground[i]}}>
                                    <img src={item}/>
                                </div>
                            </AnchorLink>
                        })}
                    </div>
                </div>

                {/* 42% */}
                <div className="largePictures">
                    {this.state.productDetails.images.map((item, i) => {
                        return <div key={i} className="largeImage" id={`img${i}`} style={{background: this.state.tempBackground[i]}} >
                            <img src={item}/>
                        </div>
                    })}
                </div>

                {/* 43% */}
                <div className="details sticky">
                    <h2>{this.state.productDetails.name}</h2>

                    <h2>{this.state.productDetails.price}</h2>

                    <div className="colors">
                        <p>Colour</p>
                        <div className="box">
                            {this.state.productDetails.colors.map((item, i) => {
                                return <div key={i} style={{backgroundColor: item, border: ((this.state.color === i) ? "5px" : "0.5px") + " solid black"}} onClick={() => {this.setColor(i)}}> 
                                </div>
                            })}
                        </div>
                        <p>{this.selectedColor}</p>
                    </div>

                    <div className="sizes">
                        <p>Size</p>
                        <div className="box">
                            {this.state.productDetails.sizes.map((item, i) => {
                                return <div key={i} onClick={() => {this.setSize(i)}} style={{border: ((this.state.size === i) ? "5.5px" : "0.5px") + " solid black"}}> 
                                    <p style={(this.state.size === i) ? {marginTop: "11px"} : {marginTop: "16px"}}>{item}</p>
                                </div>
                            })}
                        </div>
                        <br/>
                        <a href="#">WHAT SIZE DO I WANT?</a>
                    </div>

                    <div className="buttons">
                        <button>ADD TO CART</button>
                        <img src="/images/blackWhiteHeart.svg"/>
                    </div>

                    <p className="desc">{this.state.productDetails.description.split('\n').map((item, key) => {
                        return <Fragment key={key}>{item}<br/></Fragment>
                    })}</p>

                    <p className="productNo">Product No: {router.query.id}</p>
                </div>
            </div>

            <style jsx>{`

                .desc, .productNo {
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 21px;
                }

                .colors, .sizes {
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 22px;
                }

                .container {
                    display: grid;
                    width: 100%;
                    height: 100%;
                    grid-template-columns: 12% 45% 43%;
                    grid-template-areas:
                        "smallImg largeImg details";
                }

                .smallPicturesContainer {
                    grid-area: smallImg;
                    height: 100vh
                }

                .smallPictures {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 50% 50%;
                    grid-column-gap: 8px;
                    
                }

                .box {
                    display: inline-flex;
                    margin-bottom: 8px;
                }

                .box div {
                    border: 0.5px solid black;
                    box-sizing: border-box;
                    width: 48px;
                    height: 48px;
                    margin-right: 8px;
                    text-align: center;
                }

                .box div, .box div p {
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                .box div:hover {
                    cursor: pointer;
                }
                
                .smallImage {
                    margin-top: 8px;

                    /* TODO: Remove this when we add photos */
                    /* height: 117px; */
                }

                .smallImage img {
                    width: 100%;
                    height: 100%;
                }

                .largeImage img {
                    width: 100%;
                    height: 100%;
                }

                .largeImage {
                    margin-bottom: 8px;

                    /* TODO: Remove this when we add photos */
                    /* height: 876px; */
                }

                .sizes p, .colors p {
                    margin-bottom: 0;
                }

                .sizes .box div:hover {
                    background-color: var(--highlightColor);
                }

                .largePictures {
                    grid-area: largeImg;
                }

                .smallPicturesContainer, .largePictures, .details {
                    margin: 16px 0 32px 32px;
                }
                
                .details {
                    grid-area: details;
                    height: 100vh;
                }

                .sticky {
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0;
                }

                img {
                    width: 100%;
                }


                .buttons button {

                    border: none;

                    width: 80%;
                    height: 48px;

                    margin: 30px 8px 30px 0;
                    padding: 0;

                    /* left: calc(50% - 294px/2); */

                    background: var(--highlightColor);

                    position: relative;

                }
                
                .buttons button:hover {
                    filter: brightness(95%);
                    cursor: pointer;
                }
                
                .buttons {
                    display: inline-flex;
                    width: 80%;
                }
                

                .buttons img {
                    width: 100%;
                    height: 100%;
                    width: 48px;
                    height: 48px;
                    margin: 30px 8px;
                }

                .buttons img:hover {
                    cursor: pointer;
                }

                .smallPictures:hover {
                    cursor: pointer;
                }

                @media only screen and (max-width: 1200px) {
                    .container {
                        grid-template-columns: 57% 43%;
                        grid-template-areas:
                            "largeImg details";
                    }

                    .smallPicturesContainer {
                        display: none;
                    }
                }

                @media only screen and (max-width: 992px) {
                    .container {
                        grid-template-columns: 100%;
                        grid-template-areas:
                            "details"
                            "largeImg";
                    }

                    .buttons {
                        width: 100%;
                    }

                    .sticky {
                        position: relative;
                        top: none;
                    }

                    .details {
                        height: auto;
                    }
                }

                @media only screen and (max-width: 610px) {
                    .container {
                        margin-top: 32px;
                    }

                    .smallPicturesContainer, .largePictures, .details {
                        margin: 16px 0 32px 0;
                        /* text-align: center; */
                    }
                }
            `}</style>

        </Layout>
    }

}

export default withRouter(ProductDetail);