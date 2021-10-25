import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDGMM5iMDBtcZs1EOJSfkES0YMxZOFYMng",
    authDomain: "giuped-s-christmas.firebaseapp.com",
    databaseURL: "https://giuped-s-christmas-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "giuped-s-christmas",
    storageBucket: "giuped-s-christmas.appspot.com",
    messagingSenderId: "31611828063",
    appId: "1:31611828063:web:fe91f464a0c2b60f9e28ea",
    measurementId: "G-LLDDPC6KEG"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const database = firebase.database()