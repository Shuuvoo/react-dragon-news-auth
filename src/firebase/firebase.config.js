// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvLjveE8W5PnORlafm8ndoaMd3NeWFpfQ",
  authDomain: "react-dragon-news-auth-3c145.firebaseapp.com",
  projectId: "react-dragon-news-auth-3c145",
  storageBucket: "react-dragon-news-auth-3c145.appspot.com",
  messagingSenderId: "902865222369",
  appId: "1:902865222369:web:d8521f8d8352abf89995a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app