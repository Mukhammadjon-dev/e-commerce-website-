// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product,
    }
}

// For Minust Item from Cart
export const minusCart = (product) => {
    return {
        type: "MINUSITEM",
        payload: product,
    }
}

// For Delete Item from Cart
export const delCart = (item) => {
    return {
        type: "DELITEM",
        payload: item,
    }
}

// For Ordering all products from Cart
export const orderAll = (item) => {
    return {
        type: "ORDERALL",
        payload: item,
    }
}
