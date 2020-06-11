import * as actionTypes from './actionTypes';
import axios from 'axios';


export const setProduct = (products) => {
    return {
        type: actionTypes.FETCH_DATA,
        productsData: products 
    }
}

export const fetchDataFailed = () => {
    return {
        type: actionTypes.FETCH_DATA_FAILED
    };
}

export const fetchData = () => {
    return dispatch => {
        axios('https://fakestoreapi.com/products?limit=12')
        .then( response => {
            dispatch(setProduct(response.data));
        })
        .catch( error => {
            dispatch(fetchDataFailed())
        })
    }
};

export const addToCart = id => {
    return {
        type: actionTypes.ADD_TO_CART,
        id,
    }
}

export const removeFromCart = id => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id,
    }
}

export const addQuantity = id => {
    return {
        type: actionTypes.ADD_QUANTITY,
        id,
    }
}

export const subQuantity = id => {
    return {
        type: actionTypes.SUB_QUANTITY,
        id,
    }
}

export const emptyCart = id => {
    return {
        type: actionTypes.EMPTY_CART,
    }
}