import { checkToken } from "./apiRequester";

const setUser = (session, data) => {

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

    return res.loggedIn && res.validToken

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
    getUserEmailName
}