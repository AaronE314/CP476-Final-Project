import React from 'react'
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch'
import { URLString } from '../constants'
<<<<<<< HEAD
import image from '../public/img1.jpg'
const Home = ({data}) => {

  console.log(image.toString('base64'))
  const results = {
    "productID" : "2023456",
    "productName" : "Black Cardigan",
    "dateCreated" : "", 
    "recomended" : 1, 
    "gender": "male", 
    "newArrival": false,
    "availability": true, 
    "discount": 0,
    "variants": [{"color": "red", "image":"image"},{"color": "blue", "image":"image"},{"color": "green", "image":"image"}], 
    "displayImg": "imageStrings",
    "category" : "Sweater",
    "size":["Medium", "small"],
    "description" : "Blah Blah Blah were making a webstore", 
    "cost":125.00
  }; 


  const updateMacros = async () => {
    try {
      const res = await fetch(URLString+'/api/SignUp', {
        method: 'post',
        body: JSON.stringify(results)
      }).catch(function(err){
        throw err; 
      });
      let user = await res.json(); 
      console.log("HELLO");
      console.log(res);
      console.log(user);
    }catch(err){
      console.log( err); 
=======

export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slogan: "A GOOD PLACE FOR A COMPANY SLOGAN",
      // results: {
      //   productID : "2023456",
      //   productName : "Black Cardigan",
      //   dateCreated : "", 
      //   recomended : 1, 
      //   gender: "male", 
      //   newArrival: false,
      //   availability: true, 
      //   discount: 0,
      //   variants: [{color: "red", image:"image"},{color: "blue", image:"image"},{color: "green", image:"image"}], 
      //   displayImg: "imageStrings",
      //   category: "Sweater",
      //   size:["Medium", "small"],
      //   description : "Blah Blah Blah were making a webstore", 
      //   cost:125.00
      // }
>>>>>>> 6d2b052cb3ef41119dbc26ba9240591ec0baa6b6
    }
  }

<<<<<<< HEAD
  }
  updateMacros();
  //getDataForPreviousDay();
  return (
  <div className="container">
    <Head>
      <title>Web Store</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>
        <TopNav>
        </TopNav>
    </header>

    <main>
  
      {/* <Product></Product> */}
      <Dialog></Dialog>
      
      {/* <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://zeit.co/new?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card"
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with ZEIT Now.
          </p>
        </a>
      </div> */}
    </main>

    <footer>
      {/* <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a> */}
      <Footer></Footer>
    </footer>

    {/* <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
=======
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
>>>>>>> 6d2b052cb3ef41119dbc26ba9240591ec0baa6b6
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
