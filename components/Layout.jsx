import Head from 'next/head'
import { Footer } from './Footer'
import TopNav from './TopNav'
import React from 'react'

//const Home = () => (
export class Layout extends React.Component {


  render() {

    return <div className="container">
        <Head>
            <title>Web Store</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
            <TopNav/>
        </header>

        <main>
            {this.props.children}
        </main>

        <footer>
            <Footer/>
        </footer>

        <style jsx>{`
            .container {
                position: relative;
                /*height: calc(100vh + 310px) !important;*/
                min-height: calc(100vh + 310px);
            }
        
            main {
                position: relative;
                padding-top: 80px;
                /*height: calc(100vh - 80px);*/
                min-height: calc(100vh - 80px);
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
            --overlayOffset: 112px;
            --backgroundColor: white;
            --foregroundColor: black;
            --highlightColor: #FFF500;
            --headerHeight: 80px;
            --footerHeight: 310;

            }

        `}</style>
    </div>

  }

}

export default Layout;