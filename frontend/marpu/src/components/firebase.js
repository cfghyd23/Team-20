// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "cofftea-f112b.firebaseapp.com",
  projectId: "cofftea-f112b",
  storageBucket: "cofftea-f112b.appspot.com",
  messagingSenderId: "700891883923",
  appId: "1:700891883923:web:767b4c018820c4c7746066",
  measurementId: "G-MEER7MT388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;