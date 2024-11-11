// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuwk2kYgfLht4QfuszxQ_hkRfamYJyLj8",
  authDomain: "moviegpt-7efa2.firebaseapp.com",
  projectId: "moviegpt-7efa2",
  storageBucket: "moviegpt-7efa2.firebasestorage.app",
  messagingSenderId: "69439419462",
  appId: "1:69439419462:web:ed3c30360992f0e4c44647",
  measurementId: "G-PT43SXC6MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();