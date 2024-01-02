// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATg-DS58cbTi2kJRvS6FdPzsw4zma2gZE",
  authDomain: "coffee-store-58a02.firebaseapp.com",
  projectId: "coffee-store-58a02",
  storageBucket: "coffee-store-58a02.appspot.com",
  messagingSenderId: "359898106377",
  appId: "1:359898106377:web:ee815ef006414985d606d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;