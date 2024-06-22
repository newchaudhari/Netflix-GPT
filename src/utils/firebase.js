// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1nj48zMVSQ2KrduJu_Q7g4mkL9rFKQWs",
  authDomain: "netflix-gpt-92d82.firebaseapp.com",
  projectId: "netflix-gpt-92d82",
  storageBucket: "netflix-gpt-92d82.appspot.com",
  messagingSenderId: "860108919030",
  appId: "1:860108919030:web:9ca66bb2023f1de1bf1cd7",
  measurementId: "G-13Q53W7BLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
