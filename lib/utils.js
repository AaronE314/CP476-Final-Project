

const isProductWishlisted = (product) => {
    let user = localStorage.getItem("user");

    if (!user) {
        user = sessionStorage.getItem("user");
    }

    if (!user) {
        return undefined;
    }

    user = JSON.parse(user);
    let index = -1 ; 
    user.wishlist.map((item, i )=> {
        if (item.productID === product.productID){
            index = i 
        }
    })
    if (index !== -1){
        return true ; 
    }
    return false;
}
export{
    isProductWishlisted
}