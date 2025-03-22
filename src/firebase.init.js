// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5rN-02rwZwulpU1chwEgYPaMet6OuSCk",
  authDomain: "fir-project-2-54b27.firebaseapp.com",
  projectId: "fir-project-2-54b27",
  storageBucket: "fir-project-2-54b27.firebasestorage.app",
  messagingSenderId: "559506006779",
  appId: "1:559506006779:web:8e98ba14bf5dbcb2e4c65e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
