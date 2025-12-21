// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_oesUn0qYjmSEsqRdCZ_UMzK2un5-iUk",
  authDomain: "coffee-store-app-c521c.firebaseapp.com",
  projectId: "coffee-store-app-c521c",
  storageBucket: "coffee-store-app-c521c.firebasestorage.app",
  messagingSenderId: "889421096916",
  appId: "1:889421096916:web:91f51bdd716a62cf871841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);