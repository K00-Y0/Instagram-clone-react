import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHhCNZk9k2hNwsPMTbu2Xh_MAjdyBGOeM",
    authDomain: "instagram-clone-react-32de4.firebaseapp.com",
    projectId: "instagram-clone-react-32de4",
    storageBucket: "instagram-clone-react-32de4.appspot.com",
    messagingSenderId: "780702302322",
    appId: "1:780702302322:web:33e2584a4bf917013302eb",
    measurementId: "G-CYHSBQGC06"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };