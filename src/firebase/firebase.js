import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyDqB4G6NDJIgN1-UwgFiqhbue77UGxXcxE",
    authDomain: "fir-com-by-shahzaib.firebaseapp.com",
    databaseURL: "https://fir-com-by-shahzaib.firebaseio.com",
    projectId: "fir-com-by-shahzaib",
    storageBucket: "fir-com-by-shahzaib.appspot.com",
    messagingSenderId: "984076268991",
    appId: "1:984076268991:web:0b29a6d0f2f1c2eac89d0a",
    measurementId: "G-QVT7DSLYFC"
  }; 

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();