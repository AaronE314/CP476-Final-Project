

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

/**
 * 
 * @param {string} value how to sort, rec, new or price
 * @param {boolean} asending asending or decenting
 */
const getCompare = (value, asending = true) => {

    return (prodA, prodB) => {

        let key = ""
        switch (value) {
            case "rec":
                key = "productName";
                break;
            case "new":
                key = "newArrival";
                break;
            case "price":
                key = "price";
                break;
        }

        let valA = prodA[key];
        let valB = prodB[key];

        if (key === "price") {
            valA = Math.round((prodA[key] * (1 - prodA['discount'])) * 100) / 100
            valB = Math.round((prodB[key] * (1 - prodB['discount'])) * 100) / 100
        }

        let comp = 0;
        if (valA > valB) {
            comp = 1;
        } else if (valA < valB) {
            comp = -1;
        }


        return (asending) ? comp : (-1 * comp);

    }

}

export{
    isProductWishlisted,
    getCompare
}