// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHOaikwSnOxR05wKrPwIsERgN1_wILmU4",
  authDomain: "wannasurf-10055.firebaseapp.com",
  projectId: "wannasurf-10055",
  storageBucket: "wannasurf-10055.appspot.com",
  messagingSenderId: "1038057907180",
  appId: "1:1038057907180:web:313998024dc0c5675996c9",
  measurementId: "G-JLJMRN5VDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;