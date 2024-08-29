// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABjOEEw28mom6MGwAeXEWo8iwK8Jn4bD0",
  authDomain: "ecommerce-store-e191c.firebaseapp.com",
  projectId: "ecommerce-store-e191c",
  storageBucket: "ecommerce-store-e191c.appspot.com",
  messagingSenderId: "617845854135",
  appId: "1:617845854135:web:c799d34120b29c932fe232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth };