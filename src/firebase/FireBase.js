// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZHcINbQm2iUFaf77I1XyUwQVFLh_XtF8",
  authDomain: "modular-glider-326814.firebaseapp.com",
  databaseURL: "https://modular-glider-326814-default-rtdb.firebaseio.com",
  projectId: "modular-glider-326814",
  storageBucket: "modular-glider-326814.appspot.com",
  messagingSenderId: "643570575562",
  appId: "1:643570575562:web:1c2d15bc68965d2a51ec33"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db=getFirestore()
export { db };
