import * as actionTypes from './actionTypes';
import axios from 'axios';

import { auth, firestore } from '../../Firebase/Firebase'


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
        axios('https://fakestoreapi.com/products')
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

export const createNewUser = (email, password) => {
    return dispatch => {
        auth.createUserWithEmailAndPassword( email, password).then( () => {
             dispatch({ type: actionTypes.SIGNUP_SUCCESS}) 
        })
        .catch(error => {
            dispatch({ type: actionTypes.SIGNUP_FAILED, error: error.message})
        })
    }
}

export const signIn = (email, password) => {
    showLoader()
    return dispatch => {
       auth.signInWithEmailAndPassword(email, password).then( () => {
           dispatch({ type: 'LOGIN_SUCCESS'});
           hideLoader()
       })
       .catch(error => {
            dispatch({ type: 'LOGIN_ERROR', error: error.message})
        })
    }
}

export const signOut = () => {
    return dispatch => {
        auth.signOut().then( () => {
            dispatch({ type: actionTypes.SIGNOUT_SUCCESS});
            console.log(auth.uid);
        }).catch( error => {
            dispatch({ type: actionTypes.SIGNOUT_FAILED, error})
        })
    }
}

export const showLoader = () => {
    return dispatch => {
        dispatch({type: actionTypes.SHOW_LOADER})
    }
}

export const hideLoader = () => {
    return dispatch => {
        dispatch({type: actionTypes.HIDE_LOADER})
    }
}