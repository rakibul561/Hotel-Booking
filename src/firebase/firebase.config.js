// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHp4syKCINnpCDYKhDcVkbJ7VtSJiX8JU",
  authDomain: "hotel-booking-client-1d012.firebaseapp.com",
  projectId: "hotel-booking-client-1d012",
  storageBucket: "hotel-booking-client-1d012.appspot.com",
  messagingSenderId: "368510571939",
  appId: "1:368510571939:web:ecb3fda533c2fa7841f616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default app;