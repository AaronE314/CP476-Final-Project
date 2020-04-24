
// const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

// const assetPrefix = isProd ? '/CP476-Final-Project' : ''

module.exports = {
    env: {
        MONGODB_URI_READONLY: "mongodb+srv://DBConnectUser:HW1AuSTeAB9VGFy7@cluster0-tvjb2.mongodb.net/test?retryWrites=true&w=majority",
        MONGODB_URI: "mongodb+srv://root:toor@cluster0-tvjb2.mongodb.net/test?retryWrites=true&w=majority",
        MONGODB_URI_WRITER: "mongodb+srv://updater:retadpu@cluster0-tvjb2.mongodb.net/test?retryWrites=true&w=majority"
    },
    // exportPathMap: () => ({
    //     '/': { page: '/' },
    //     '/cart': {page: '/cart'},
    //     // '/categories': {page: '/categories'},
    //     '/checkout': {page: '/checkout'},
    //     '/confirmation': {page: '/confirmation'},
    //     // '/orderReview': {page: '/orderReview'},
    //     // '/orders': {page: '/orders'},
    //     // '/productDetails': {page: '/productDetails'},
    //     // '/review': {page: '/review'},
    //     // '/wishlist': {page: '/wishlist'},
    // }),
    assetPrefix: "",
    // webpack: config => {
    //     config.plugins.push(
    //       new webpack.DefinePlugin({
    //         'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
    //       }),
    //     )
    
    //     return config
    // },
}
