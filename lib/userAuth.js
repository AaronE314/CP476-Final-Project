import { checkToken } from "./apiRequester";

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

    return res.loggedIn && res.validToken && getUser() !== undefined;

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
        console.log("no user");
        return undefined;
    }

    user = JSON.parse(user);

    return user.email.split("@")[0];

}

const updateWishList = (item, remove) => {

    let user = getUser();

    console.log("remove", remove);

    if (user) {
        
        if (!user.wishlist.includes(item)) {

            if (remove) {
                user.wishlist = user.wishlist.filter(val => JSON.stringify(val) !== JSON.stringify(item));
            } else {
                console.log("adding");
                user.wishlist.push(item);
            }

            isSignedIn().then((signedIn) => {

                if (signedIn) {

                    // TODO: make call to update users wishList
                    console.log("update user");

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

const updateCart = (item, remove) => {

    let user = getUser();

    if (user) {
        
        if (!user.shoppingCart.includes(item)) {

            if (remove) {
                user.shoppingCart = user.shoppingCart.filter(val => JSON.stringify(val) !== JSON.stringify(item))
            } else {
                user.shoppingCart.push(item);
            }

            isSignedIn().then((signedIn) => {

                if (signedIn) {

                    // TODO: make call to update users cart
                    console.log("update user");

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
    getUserEmailName,
    updateWishList,
    updateCart
}