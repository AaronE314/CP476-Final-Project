
const setToken = (session, data) => {

    if (!session) {

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.userInfo));

    } else {

        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("user", JSON.stringify(data.userInfo));

    }
}

const isSignedIn = () => {

    let token = localStorage.getItem("token");

    if (!token) {
        token = sessionStorage.getItem("token");
    }

    return token !== null;

}

const getToken = () => {
    
    let token = localStorage.getItem("token");

    if (!token) {
        token = sessionStorage.getItem("token");
    }

    return token;

}

const getUserEmail = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    user = JSON.parse(user);

    return user.email;

}

const getUserEmailName = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    user = JSON.parse(user);

    return user.email.split("@")[0];

}


const getUserWishList = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    user = JSON.parse(user);

    return user.wishlist;

}

const getUserCart = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    user = JSON.parse(user);

    return user.shoppingCart;

}

const getUser = () => {

    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    return JSON.parse(user);

}

export {
    setToken,
    getToken,
    getUserEmail,
    getUserWishList,
    getUserCart,
    getUser,
    isSignedIn,
    getUserEmailName
}