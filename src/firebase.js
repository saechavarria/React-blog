import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC9PkXf5o2EI-7Qm-X5ZIKa5ygKC3LrOHs",
  authDomain: "react-blog-88073.firebaseapp.com",
  databaseURL: "https://react-blog-88073.firebaseio.com",
  projectId: "react-blog-88073",
  storageBucket: "react-blog-88073.appspot.com",
  messagingSenderId: "157045221029",
  appId: "1:157045221029:web:be1702d552265e8bc24f4c",
  measurementId: "G-G431SFH8TV",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
