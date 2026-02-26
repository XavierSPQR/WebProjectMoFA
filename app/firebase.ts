
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
