// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7hfR-xkAJQbLjf51paenA03gk0yF2HY8",
  authDomain: "fireblig.firebaseapp.com",
  projectId: "fireblig",
  storageBucket: "fireblig.appspot.com",
  messagingSenderId: "292011703942",
  appId: "1:292011703942:web:710ae907f482756daf9b07",
  measurementId: "G-XMMTLWGS8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
