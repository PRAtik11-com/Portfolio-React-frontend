// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRf0PAvvAonBrWXlq1Yjgw6lJfLQFSupc",
  authDomain: "portfolioauth-33d32.firebaseapp.com",
  projectId: "portfolioauth-33d32",
  storageBucket: "portfolioauth-33d32.firebasestorage.app",
  messagingSenderId: "242112497833",
  appId: "1:242112497833:web:a45e56b0aef633765101b8",
  measurementId: "G-FL6145KVJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();