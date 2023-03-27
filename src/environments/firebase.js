import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADzR_4SZGDFJTui8hPQM0YOWQ8WkTlZuw",
  authDomain: "webchat-48e37.firebaseapp.com",
  projectId: "webchat-48e37",
  storageBucket: "webchat-48e37.appspot.com",
  messagingSenderId: "701842443697",
  appId: "1:701842443697:web:9253b9587ca858714e8190",
  measurementId: "G-6SY8SLK1JT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
