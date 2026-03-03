// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy3w4WkYe69fxd61pba-rSerHYcpRyGJE",
  authDomain: "mofa-e6948.firebaseapp.com",
  projectId: "mofa-e6948",
  storageBucket: "mofa-e6948.firebasestorage.app",
  messagingSenderId: "676154882566",
  appId: "1:676154882566:web:51926dad782e50b7e0e187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
