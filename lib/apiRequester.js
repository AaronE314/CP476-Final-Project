import { URLString } from '../constants'
import fetch from 'isomorphic-unfetch'

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

export async function signIn(email, password, expires) {
    return fetch(URLString + '/api/users/signIn', {
        method: 'post',
        body: JSON.stringify({email, password, expires})
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

export async function checkToken() {

    return fetch(URLString + '/api/users/checkToken', {method: 'get'}).then(r => r.json());

}

export async function signOut() {

    // localStorage.removeItem("token");
    // sessionStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

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


export async function getOverlay(menuItem) {
    return fetch(URLString + '/api/ui/getOverlay', {
        method: 'get'
    }).then(r => r.json());
}




export async function getWishlist(){
    return fetch(URLString + '/api/users/wishlist', {
        method: 'get'
    }).then(r => r.json());
}



export async function getShoppingCart(userID){
    return fetch(URLString + '/api/users/cart?userID=' + encodeURI(userID), {
        method: 'get'
    }).then(r => r.json());
}




export async function addToWishlist(userID, product){
    console.log(URLString);
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
        console.log("data");
        console.log(data);
    }).catch((err) => {
        console.log(JSON.stringify(err)); 
    });
}


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
        console.log("data");
        console.log(data);
    }).catch((err) => {
        console.log(err); 
    });
}
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
    })
    .then(data => {
        console.log("data");
        console.log(data);
    }).catch((err) => {
        console.log(err); 
    });
}

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