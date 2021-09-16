// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhD8QODZxnJ8F__arRxxsTYwwlDyTVkcE",
  authDomain: "landingpage-95b2e.firebaseapp.com",
  projectId: "landingpage-95b2e",
  storageBucket: "landingpage-95b2e.appspot.com",
  messagingSenderId: "112871630591",
  appId: "1:112871630591:web:8de940ba6c030130268eca",
  measurementId: "G-7M43Z5MP97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getFirestore(app)