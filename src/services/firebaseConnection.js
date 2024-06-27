// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVUD75C4jRRQH9Fac-MIGbClxMmaZimhs",
  authDomain: "budgetbuddy-79d6c.firebaseapp.com",
  projectId: "budgetbuddy-79d6c",
  storageBucket: "budgetbuddy-79d6c.appspot.com",
  messagingSenderId: "557572108927",
  appId: "1:557572108927:web:3588ea3f10a5aba8ae854a",
  measurementId: "G-RQEQYQBJ9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;