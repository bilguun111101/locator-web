import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpEPMrTDA-AtLA5kFsfcKw8j1aoVq-lQY",
  authDomain: "locator-8430f.firebaseapp.com",
  projectId: "locator-8430f",
  storageBucket: "locator-8430f.appspot.com",
  messagingSenderId: "414944720688",
  appId: "1:414944720688:web:cbcaf7dadaa31aacb8baf5",
  measurementId: "G-YWT0XT2ZXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const auth = getAuth();