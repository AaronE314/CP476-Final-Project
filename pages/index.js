<<<<<<< HEAD
import React from 'react'
import Layout from '../components/layout';

//const Home = () => (
export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slogan: "A GOOD PLACE FOR A COMPANY SLOGAN"
    }
  }
=======
import Head from 'next/head'
import { Dialog } from '../components/Dialog'
import { Footer } from '../components/Footer'
import TopNav from '../components/TopNav'
import React, {useState, useEffect} from 'react'
import fetch from 'isomorphic-unfetch'
import {Product} from "../components/Product"
import { URLString } from '../constants'
import image from '../public/img1.jpg'
const Home = ({data}) => {

  console.log(image.toString('base64'))
  const results = {
    "productID" : "1010112",
    "productName" : "Hoodie",
    "dateCreated" : new Date(), 
    "recomended" : 1, 
    "gender": "male", 
    "newArrival": false,
    "availability": false, 
    "discount": 0,
    "variants": [{"color": "red", "image":"image"},{"color": "blue", "image":"image"},{"color": "green", "image":"image"}], 
    "displayImg": image,
    "category" : "Sweater",
    "size":["Medium", "small"],
    "description" : "Blah Blah Blah were making a webstore", 
    "cost":49.99
  }; 


  const updateMacros = async () => {
    try {
      const res = await fetch(URLString+'/api/products', {
        method: 'post',
        body: JSON.stringify(results)
      }).catch(function(err){
        throw err; 
      });
  
      console.log(res);
    }catch(err){
      console.log( err); 
    }
  }
  const getDataForPreviousDay = async () => {
    try{
      const res = await fetch(URLString+ '/api/getProductsNewArrivals?class='+ results.gender, {
        method: "get",
      })
      const json = await res.json()
      console.log("*********************************\n");
      console.log(json);
      console.log("*********************************\n"); 
      
    }catch(err){
      throw err;
    }
>>>>>>> New arrivals end point added

  render() {
  return <Layout>
      <div className="background">
        
        <img src="/images/img1.jpg" className="backgroundImage img1 noselect"/>

        <img src="/images/img2.jpg" className="backgroundImage img2 noselect"/>

      </div>

      <div className="centerText">
        <h1 className ="slogan">{this.state.slogan}</h1>
        <div className="buttons">
          <button className="shopNew">
            SHOP NEW
          </button>
          <button className="shopNew">
            FEATURED
          </button>
          <button className="shopNew">
            SALE
          </button>
        </div>
      </div>
      <style jsx>{`

      .centerText {
        width: 728px;
        position: absolute;
        top: calc(50% - 94px/2);
        left: calc(50% - 728px/2);
      }

      .background {
        height: calc(100vh - var(--headerHeight));;
        width: 100%;
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .buttons button:hover {
          filter: brightness(95%);
          cursor: pointer;
      }

      .noselect { 
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        user-drag: none;
      } 

      .buttons button {

          border: none;

          width: 225px;
          height: 32px;

          margin-top: 32px;

          left: calc(50% - 264px/2);

          background: var(--highlightColor);

      }

      .slogan {
        width: 100%;
        font-size: 32px;
        text-align: center;
        text-transform: uppercase;
        background: var(--highlightColor);
        line-height: 37px;
      }

      .backgroundImage {
        --margin: 32px;
        margin: var(--margin);
        height: calc(100% - (2 * var(--margin)));
        width: calc(50% - (var(--margin) + var(--margin)/2));
        object-fit: cover;
      }

      .img1 {
        background: #CDC8E0;
        margin-right: 0;
      }

      .img2 {
        background: #F5E1FF;
      }

      @media only screen and (max-width: 1024px) {

        .img2 {
          display: none;
        }

        .img1 {
          --margin: 16px;
          margin: var(--margin);
          width: calc(100% - (2 * var(--margin)));
        }

      }

      @media only screen and (max-width: 800px) {

        .slogan {
          width: 100%;
          font-size: 20px;
          text-align: center;
          line-height: 22px;
        }

        .centerText {
          --width: calc(100vw - 20%);
          width: var(--width);
          position: absolute;
          top: calc(50% - 94px/2);
          left: calc(50% - var(--width)/2);
        }

        .buttons button {

          border: none;

          width: calc(var(--width)/3 - 3%);
          /* 120px; */
          min-height: 32px;

          margin-top: 32px;

          left: calc(50% - 264px/2);

          background: var(--highlightColor);

        }

        .img1 {
          --margin: 16px;
          margin: var(--margin) 0;
          width: 100%;
        }


      }
    
    `}</style>
    </Layout>
  }
}

export default Home
