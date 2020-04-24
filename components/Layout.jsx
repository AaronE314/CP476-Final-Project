import Head from 'next/head'
import { Footer } from './Footer'
import TopNav from './TopNav'
import React from 'react'

//const Home = () => (
export class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullPage: (this.props.fullPage === undefined || this.props.fullPage)
        }

    }

  render() {

    return <div className="container" style={{minHeight: (this.state.fullPage) ? "calc(100vh + 310px)" : "calc(100vh)"}}>
        <Head>
            <title>Web Store</title>
            <link rel="icon" href="/favicon.ico" />
            {/* {(this.props.stripe) ? <script src="https://js.stripe.com/v3/"></script> : null} */}
        </Head>

        <header>
            <TopNav/>
        </header>

        <main style={{minHeight: (this.state.fullPage) ? "calc(100vh - 80px)" : "calc(100vh - 80px - 310px)"}}>
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

            body {
                margin: 0;
            }

        `}</style>
    </div>

  }

}

export default Layout;