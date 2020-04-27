import { URLString } from '../constants'
import fetch from 'isomorphic-unfetch'
import {getUserEmail} from "./userAuth"

/**
 * Makes a call to /api/users/signUp to create a new user
 * 
 * @param {string} email The Users Email
 * @param {string} password The users password
 * 
 * @returns a promise with the user info
 */
export async function signUp(email, password) {
    return fetch(URLString + '/api/users/signUp', {
        method: 'post',
        body: JSON.stringify({email, password})
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    })
    .catch((err) => {
        console.log(err); 
    });
}

/**
 * Sign's the user in, sets a jwt token as a cookie and return the user info
 * @param {string} email the user email
 * @param {string} password the user password
 * @param {boolean} expires does the token expire or is it a session
 */
export async function signIn(email, password, expires) {
    return fetch(URLString + '/api/users/signIn', {
        method: 'post',
        body: JSON.stringify({email, password, expires})
    }).then(r => {
        try {
            return r.json();
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    })
    .catch((err) => {
        console.log(err); 
    });
}

/**
 * Checks if the token is valid
 * 
 * @param {Object} req the req variable if called from the backend, should be undefined/null for the frontend
 */
export async function checkToken(req) {

    if (req) {
        return fetch(URLString + '/api/users/checkToken', {
            method: 'get',
            credentials: 'include',
            headers: {
                cookie:  req.headers.cookie
            }
        }).then(r => r.json());
    } else {
        return fetch(URLString + '/api/users/checkToken', {method: 'get'}).then(r => r.json());
    }

}

/**
 * Signes the user out
 */
export async function signOut() {

    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify({wishlist: [], shoppingCart: []}));

    return fetch(URLString + '/api/users/signout', {
        method: 'post'
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    })
    .catch((err) => {
        console.log(err); 
    });
}

/**
 * Gets the object for the overlay
 */
export async function getOverlay() {
    return fetch(URLString + '/api/ui/getOverlay', {
        method: 'get'
    }).then(r => r.json());
}

/**
 * Gets the users wishlist based on the token in cookies
 */
export async function getWishlist(){
    return await fetch(URLString + '/api/users/wishlist', {
        method: 'get'
    }).then(r => r.json());
}

/**
 * Gets the users shopping cart
 * 
 * @param {string} userID the email of the user
 */
export async function getShoppingCart(userID){
    return await fetch(URLString + '/api/users/cart?userID=' + encodeURI(userID), {
        method: 'get'
    }).then(r => r.json());
}

/**
 * Adds a user to the wishlist
 * @param {string} userID the users email
 * @param {object} product the product to add
 */
export async function addToWishlist(userID, product){
    fetch(URLString + '/api/users/wishlist', {
        method: 'post',
        body: JSON.stringify({userID ,product})
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    })
    .then(data => {
    }).catch((err) => {
        console.log(JSON.stringify(err)); 
    });
}

/**
 * Adds or removes a product from the users shopping cart
 * @param {string} userID the email of the user
 * @param {object} product the product to add or remove
 * @param {int} amount the amount to add or remove
 */
export async function removeFromShoppingCart(userID,product,amount){
    await fetch(URLString + '/api/users/removeCart', {
        method: 'post',
        body: JSON.stringify({userID, product,amount})
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    })
    .then(data => {
    }).catch((err) => {
        console.log(err); 
    });
}

/**
 * Adds or removes a product from the users shopping cart
 * 
 * @param {string} userID the users email
 * @param {object} product the product to add
 * @param {*} quantity the amount to add or remove
 */
export async function addToShoppingCart(userID,product,quantity){
    await fetch(URLString + '/api/users/cart', {
        method: 'post',
        body: JSON.stringify({userID, product, quantity})
    }).then(r => {
        try {
            
            return  r.json();
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    }).then(r=>{
        console.log(r)
    }).catch((err) => {
        console.log(err); 
    });
}

/**
 * Returns the products the match the filter
 * 
 * @param {string} gender the maincategory to grab info from
 * @param {string} subCategory the subCategory to grab info from
 * 
 * @returns the products the match the filter
 */
export async function getProducts(gender,subCategory){
    
    return fetch(URLString + '/api/products/getProducts?gender='+ encodeURI(gender) + "&category="+ encodeURI(subCategory), {
        method: 'get'
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    });
}

/**
 * gets products that match the search query
 * 
 * @param {string} search the search query
 * 
 * @returns products that match the search query
 */
export async function getProductsSearch(search) { 

    return fetch(URLString + `/api/products/getProductsBySearch?search=${search}`, {
        method: 'get'
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    });

}

/**
 * Creates and adds a new order to the db
 * 
 * @param {object} billingInfo the billing info entered by the user
 * @param {array of objects} products the products purchased
 * @param {object} calculatedInfo info that is calulated by the order
 * 
 * @returns the order number
 */
export async function buildCheckout(billingInfo, products, calculatedInfo) {
    let email = getUserEmail();
    return fetch(URLString + `/api/checkout/build-checkout`, {
        method: 'post',
        body: JSON.stringify({billingInfo, products, ...calculatedInfo, email })
    }).then(r => r.json())
    .catch((err) => {
        console.log(err); 
    });
}

/**
 * Gets all the info about a single product
 * 
 * @param {string} id the product id of the product to grab
 * 
 * @returns the product matching the id
 */
export async function getDetailedProduct(id){

    return fetch(URLString + '/api/products/getSingleProduct?id='+ encodeURI(id), {
        method: 'get'
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    });
}

/**
 * @author Chris Labatt
 * @public
 * @summary A post request for verifying the user's email address and updating the database to confirm it. 
 * @param {string} token A JWT used to verify the user's email
 */
export async function verifyEmail(token){
    return fetch(URLString + '/api/users/verifyEmail', {
        method: 'post',
        body: JSON.stringify({token})
    }).then(r => {
        try {
            return r.json();
        } catch(e) {
            console.log(r);
            return Promise.reject("r is not json");
        }
    })
    .catch((err) => {
        console.log(err); 
    });
}

/**
 * Gets the orders related to the email
 * 
 * @param {string} email the email of the user
 * 
 * @returns the orders that the user has made
 */
export async function getOrders(email){
    if (!email) {
        email = getUserEmail();
    }
    return fetch(URLString + '/api/order/getOrders?email='+ encodeURI(email), {
        method: 'get'
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            
            return Promise.reject("r is not json");
        }
    });
}

/**
 * gets all the info about a single order
 * @param {string} orderNumber the order nubmer of the order to grab
 * @param {string} email the email of the user
 * 
 * @returns the order that matches the query
 */
export async function getSingleOrder(orderNumber, email){
    if (!email) {
        email = getUserEmail();
    }
    return fetch(URLString + '/api/order/getSingleOrder?email='+ encodeURI(email)+"&orderNumber="+encodeURI(orderNumber), {
        method: 'get'
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            
            return Promise.reject("r is not json");
        }
    });
}

/**
 * deletes all the items from a users cart, called mainly after an order is placed
 */
export async function deleteAllCart(){
    let email = getUserEmail();
    return fetch(URLString + '/api/users/removeAllCart?email='+ encodeURI(email), {
        method: 'get'
    }).then(r => {
        try {
            return r.json()
        } catch(e) {
            
            return Promise.reject("r is not json");
        }
    });
}