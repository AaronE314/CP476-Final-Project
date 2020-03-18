import Head from 'next/head'
import { Footer } from '../components/Footer'
import TopNav from '../components/TopNav'
import React from 'react'

//const Home = () => (
export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slogan: "A GOOD PLACE FOR A COMPANY SLOGAN"
    }
  }

  render() {
  return <div className="container">
    <Head>
      <title>Web Store</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>
        <TopNav>
        </TopNav>
    </header>

    <main>

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

    </main>

    <footer>
      <Footer></Footer>
    </footer>

    <style jsx>{`

      .container {
        position: relative;
        height: calc(100vh + 310px) !important;
      }

      main {
        position: relative;
        padding-top: 80px;
        height: calc(100vh - 80px);
      }

      .centerText {
        width: 728px;
        position: absolute;
        top: calc(50% - 94px/2);
        left: calc(50% - 728px/2);
      }

      .background {
        height: 100%;
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
      }

      .img1 {
        background: #CDC8E0;
        margin-right: 0;
      }

      .img2 {
        background: #F5E1FF;
      }
    
    `}</style>
    <style jsx global>{`

      * {
        font-family: "Roboto";
        font-style: normal;
        font-weight: bold;
        line-height: 19px;

        letter-spacing: 0.1em;

      }

      a {
        text-decoration: none;
        color: black;
      }

      a:selcted {
        color: black;
      }

      
      :root {
        --overlayOffset: 128px;
        --backgroundColor: white;
        --foregroundColor: black;
        --highlightColor: #FFF500;

      }


    `}</style>
  </div>
  }
}

export default Home
