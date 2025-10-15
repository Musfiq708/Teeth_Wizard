// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0dpmuH8tdMpMV_7oysUvS6nen6a_NShY",
  authDomain: "teeth-wiz.firebaseapp.com",
  projectId: "teeth-wiz",
  storageBucket: "teeth-wiz.firebasestorage.app",
  messagingSenderId: "698778775",
  appId: "1:698778775:web:994a657cc56f37bb75d5d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
