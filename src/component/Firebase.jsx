import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw0PmeQ2f2MfweBxwMYbKV16rRzIQ56rA",
  authDomain: "clone-f94eb.firebaseapp.com",
  projectId: "clone-f94eb",
  storageBucket: "clone-f94eb.appspot.com",
  messagingSenderId: "41866821055",
  appId: "1:41866821055:web:7785c49f679cd52225b50a",
  measurementId: "G-KZ1CQSHGYS",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;
