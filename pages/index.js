import React from 'react'
import Layout from '../components/Layout';

//const Home = () => (
export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slogan: "Spring into the new season"
    }
  }

  render() {
  return <Layout>
      <div className="background">
        
        <img src="/images/img1.jpg" className="backgroundImage img1 noselect"/>

        <img src="/images/img2.jpg" className="backgroundImage img2 noselect"/>

      </div>

      <div className="centerText">
        <h1 className ="slogan">{this.state.slogan}</h1>
        <div className="buttons">
          <a href="/categories?mainCategory=MEN">
            <button className="shopNew">
              Shop Men
            </button>
          </a>
          <a href="/categories?mainCategory=WOMEN">
            <button className="shopNew">
              Shop Women
            </button>
          </a>
          <a href="/categories?mainCategory=KIDS">
            <button className="shopNew">
              Shop Kids
            </button>
          </a>
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
      .shopNew, .slogan {
          text-transform: uppercase;
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
        padding: 4px 0;
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
        .buttons {
          flex-direction: column;
          align-items: center;
        }
        
        .buttons a {
          max-width: 225px;
        }
        .img1 {
          --margin: 16px;
          margin: var(--margin) 0;
          width: 100%;
          display: table-cell;
          vertical-align: middle;
        }
      }
    
    `}</style>
    </Layout>
  }
}

export default Home