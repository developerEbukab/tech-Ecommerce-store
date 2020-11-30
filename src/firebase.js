import firebase from '@firebase/app';
require('firebase/auth');

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoabYLUnGlwBXRGkgnMgFm4sbYc45Ku8o",
  authDomain: "tech-commerce-6b4dc.firebaseapp.com",
  databaseURL: "https://tech-commerce-6b4dc.firebaseio.com",
  projectId: "tech-commerce-6b4dc",
  storageBucket: "tech-commerce-6b4dc.appspot.com",
  messagingSenderId: "620537972111",
  appId: "1:620537972111:web:9fa63fcb953734c0ae37fa",
  measurementId: "G-CK92G0B6M6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export  const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();