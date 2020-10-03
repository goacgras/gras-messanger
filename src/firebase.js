// import firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjYw3y8BvlqYYqNBKxQSWb8y1QKJrhYsM",
  authDomain: "gras-messanger.firebaseapp.com",
  databaseURL: "https://gras-messanger.firebaseio.com",
  projectId: "gras-messanger",
  storageBucket: "gras-messanger.appspot.com",
  messagingSenderId: "612071402408",
  appId: "1:612071402408:web:513ce978ac09ee244d4b9d",
  measurementId: "G-GRVBZRBB9Q"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;