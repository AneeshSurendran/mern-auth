// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import OAuth from "./components/OAuth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7c510.firebaseapp.com",
  projectId: "mern-auth-7c510",
  storageBucket: "mern-auth-7c510.appspot.com",
  messagingSenderId: "976758300434",
  appId: "1:976758300434:web:83d2ecbe618e32be939dcb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);