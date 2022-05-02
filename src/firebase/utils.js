import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { firebaseConfig } from './config';

// import firebase from "firebase/app";
import "firebase/database";
// import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {apiKey: "AIzaSyBRTOho4WVukUjgbTnXmn5rN_ej6fllIf0",
authDomain: "test-shop-24243.firebaseapp.com",
databaseURL: "https://test-shop-24243.firebaseio.com",
projectId: "test-shop-24243",
storageBucket: "test-shop-24243.appspot.com",
messagingSenderId: "314797914276",
appId: "1:314797914276:web:0cd21ef6193c8bf80e8e31",
measurementId: "G-M969LS9MFD"};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const handleUserProfile = async ({ userAuth, additionalData }) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const userRoles = ['user'];

    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
        ...additionalData
      });
    } catch(err) {
      // console.log(err);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}