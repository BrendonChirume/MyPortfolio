import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2k5viX8rUjrWqLK-7dHoW_d-m8eo2YcQ",
  authDomain: "myportfolio-92c49.firebaseapp.com",
  projectId: "myportfolio-92c49",
  storageBucket: "myportfolio-92c49.appspot.com",
  messagingSenderId: "443559722420",
  appId: "1:443559722420:web:5149f9ac772ce1dd8246e1",
  measurementId: "G-66499EZJ90",
};
firebase.initialize(firebaseConfig);
firebase.firestore().settings({ timestapInSnapShots: true });

export default firebase;
