// import { initializeApp } from "firebase/app";
// // import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGCUJD882W7qMe8V7NYRveaJm5kSoGxjo",
  authDomain: "clone-fronted.firebaseapp.com",
  projectId: "clone-fronted",
  storageBucket: "clone-fronted.appspot.com",
  messagingSenderId: "691318397946",
  appId: "1:691318397946:web:4178750f274a6081fee243",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore and Auth (if you're using these services)
// // const db = getFirestore(app);
// const auth = getAuth(app);

// export default auth;
const app = firebase.initializeApp(firebaseConfig);
// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);
// Get the Firestore database for storing and retrieving data
export const db = app.firestore();