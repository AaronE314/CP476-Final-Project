import { checkToken,addToWishlist,addToShoppingCart,removeFromShoppingCart } from "./apiRequester";

const setUser = (session, data) => {

    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    if (!session) {

        // localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.userInfo));

    } else {

        // sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("user", JSON.stringify(data.userInfo));

    }
}

const isSignedIn = async () => {

    let res = await checkToken();

    // console.log(res);

    if (typeof localStorage !== "undefined") {
        return res.loggedIn && res.validToken && getUser() !== undefined;
    } else {
        return res.loggedIn && res.validToken;
    }


}


const getUserEmail = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    if (!user) {
        return undefined;
    }

    user = JSON.parse(user);

    return user.email;

}

const getUserEmailName = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    if (!user) {
        return undefined;
    }

    user = JSON.parse(user);

    if (!user.email) {
        return undefined;
    }

    return user.email.split("@")[0];

}

const updateWishList = (item, remove) => {

    let user = getUser();

    if (user) {
        
        if (!user.wishlist.includes(item)) {

            if (remove) {
                user.wishlist = user.wishlist.filter(val => JSON.stringify(val) !== JSON.stringify(item));
            } else {
                user.wishlist.push(item);
            }

            isSignedIn().then((signedIn) => {
                if (signedIn) {
                    addToWishlist(user.email, item);
                }
            });

            if (localStorage.getItem("user")) {
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                sessionStorage.setItem("user", JSON.stringify(user));
            }


        }

    } else {

        // User not logged in.

        localStorage.setItem("user", JSON.stringify({wishlist: [item]}));

    }

}

const updateCart = async (item, remove, amount, value) => {

    let user = getUser();

    console.log(`item: ${item}, remove: ${remove}, amount: ${amount}, value: ${value}`);

    if (user) {
        let index = -1; 
        index = user.shoppingCart.findIndex((product)=>{

            return product.productID === item.productID && product.size === item.size && product.colours.hex === item.colours.hex;
        });

        console.log("index: " + index);

        if (!user.shoppingCart.includes(item)) {

            console.log("includes item: " + remove);

            if (remove) {
                user.shoppingCart = user.shoppingCart.filter(val => JSON.stringify(val) !== JSON.stringify(item));
            } else {
                if (index !== -1 ){
                    user.shoppingCart[index].quantity += value;
                }else {

                    user.shoppingCart.push(item);
                }
                
            }

            await isSignedIn().then( async (signedIn) => {

                if (signedIn) {
                    
                    if (remove !== true ){
                        console.log("GOING INTO apiREQUESTER")
                        await addToShoppingCart(user.email, item,value);
                        
                    }else {
                        
                        await removeFromShoppingCart(user.email, item ,amount )
                    }


                }
            });

            
            if (localStorage.getItem("user")) {
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                sessionStorage.setItem("user", JSON.stringify(user));
            }

        }

    } else {

        // User not logged in.

        localStorage.setItem("user", JSON.stringify({shoppingCart: [item]}));

    }

}


const getUserWishList = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    if (!user) {
        return undefined;
    }

    user = JSON.parse(user);

    return user.wishlist;

}

const getUserCart = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    if (!user) {
        return undefined;
    }

    user = JSON.parse(user);

    return user.shoppingCart;

}

const initUser = () => {
    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    if (!user) {
        localStorage.setItem("user", JSON.stringify({wishlist: [], shoppingCart: []}));
    }
}

const getNumberOfItemsInCart = () => {

    if (typeof localStorage === "undefined") {
        return 0;
    }

    const cart = getUserCart();

    let total = 0;

    if (cart) {
        cart.forEach(item => {
            total += item.quantity
        });
    }
    
    return total;
}

const getUser = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    if (!user) {
        return undefined;
    }

    return JSON.parse(user);

}

export {
    setUser,
    // getToken,
    getUserEmail,
    getUserWishList,
    getUserCart,
    getUser,
    isSignedIn,
    getNumberOfItemsInCart,
    getUserEmailName,
    updateWishList,
    updateCart,
    initUser
}