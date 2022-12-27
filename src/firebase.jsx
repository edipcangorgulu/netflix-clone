// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: " AIzaSyCdMNgYZAGhcFZg8h - nGGg0N2lsntZ6EM8",
    authDomain: "netflix - 2 - a4a2b.firebaseapp.com",
    projectId: "netflix - 2 - a4a2b",
    storageBucket: " netflix - 2 - a4a2b.appspot.com",
    messagingSenderId: " 64112018369",
    appId: " 64112018369: web: 06cbb9ee75ad98b8cbe540",
    measurementId: "G - ZQ571R47BX",
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);