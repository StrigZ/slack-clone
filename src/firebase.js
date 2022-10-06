// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVXeIMRUPQNiDiDUw0alasxqKM03OrnmE",
  authDomain: "slack-clone-d9b7e.firebaseapp.com",
  projectId: "slack-clone-d9b7e",
  storageBucket: "slack-clone-d9b7e.appspot.com",
  messagingSenderId: "969001389921",
  appId: "1:969001389921:web:fbdd7ac9b712ce6cd67f20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
