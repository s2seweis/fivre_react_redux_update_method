import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRTOho4WVukUjgbTnXmn5rN_ej6fllIf0",
  authDomain: "test-shop-24243.firebaseapp.com",
  databaseURL: "https://test-shop-24243.firebaseio.com",
  projectId: "test-shop-24243",
  storageBucket: "test-shop-24243.appspot.com",
  messagingSenderId: "314797914276",
  appId: "1:314797914276:web:0cd21ef6193c8bf80e8e31",
  measurementId: "G-M969LS9MFD"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
