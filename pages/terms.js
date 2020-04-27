import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
const Terms = () => {

    // const [orders, setOrders] = useState();



    return <Layout fullPage={false}>
        <div>
            <h1>Terms of Service</h1>
            <h2>Acceptance of Terms</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut pharetra nulla, vel congue velit. Nam ultrices, lorem a hendrerit scelerisque, nisi lorem condimentum ante, eleifend venenatis risus risus vitae ligula. Ut commodo urna ac est posuere malesuada. Aliquam ante magna, suscipit vehicula dolor ac, consectetur fringilla tortor. Pellentesque at odio id diam commodo aliquam at sed ante. Sed euismod nunc et libero imperdiet, non pretium risus blandit. Nullam sit amet fringilla lectus, nec pharetra mi. Proin eu justo leo. Ut at congue eros. Nam cursus pulvinar purus eu gravida. Integer feugiat mi sit amet tortor tristique tempus. Sed a fringilla felis.</p>
            <h2>Definitions</h2>
            <p>Aenean libero ex, ornare vel malesuada ac, auctor at tellus. Donec ac leo eros. Quisque molestie bibendum diam vel maximus. Nunc tempus ullamcorper urna at imperdiet. Donec in ligula diam. Aenean pharetra mattis erat, quis mattis lectus congue sed. Ut egestas feugiat turpis vitae pellentesque. Fusce rhoncus elit eu massa sodales finibus. Nulla facilisi.</p>
            <h2>API License</h2>
            <p>Aliquam eleifend semper lectus, mattis convallis dui pretium eget. Suspendisse nec ante sem. Proin eu lacus elit. Maecenas eu congue neque. In vel varius leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin risus ex, fermentum nec imperdiet ut, blandit id nulla. Nam sagittis purus tortor, id ullamcorper odio dapibus vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mauris mi, egestas ac rhoncus nec, convallis ac dolor. Morbi eget ultricies odio. Pellentesque condimentum magna nec sapien sagittis, sed sollicitudin ipsum fringilla. Maecenas tincidunt consequat dolor, at efficitur diam finibus et. Nulla leo dolor, accumsan ut lectus quis, vestibulum egestas arcu. Mauris cursus nulla eu commodo pulvinar.</p>
        </div>
        

        <style jsx>{`
            h1 {
                text-transform: uppercase;
                margin-bottom: 32px;
                line-height: 1em;
            }
            h2 {
                font-family: "Open Sans";
                letter-spacing: 0;
            }
            p {
                font-family: "Open Sans";
                font-weight: normal;
                letter-spacing: 0;
            }

            div {
                margin: 0 192px;
            }

            @media only screen and (max-width: 1000px) {
                
                div {
                    margin: 0 120px;
                }

            }

            @media only screen and (max-width: 610px) {

                div {
                    margin: 45px 16px 0 16px;
                }

            }

        `}</style>

    </Layout>

};


export default Terms;