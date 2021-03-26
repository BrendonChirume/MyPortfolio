import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8b04AQh_KLVLj9W-BPaBM9prajsZsPo4",
  authDomain: "new-project-3b585.firebaseapp.com",
  databaseURL: "https://new-project-3b585.firebaseio.com",
  projectId: "new-project-3b585",
  storageBucket: "new-project-3b585.appspot.com",
  messagingSenderId: "44025350887",
  appId: "1:44025350887:web:e30316110f11d6d361b042",
  measurementId: "G-T0HHRNFQET",
};
firebase.initialize(firebaseConfig);
firebase.firestore().settings({ timestapInSnapShots: true });

export default firebase;
