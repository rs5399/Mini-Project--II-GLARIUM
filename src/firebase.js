import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCkarU5hk-5viESfEWAhSczRMVw3E4vatg",
    authDomain: "glarium-57a05.firebaseapp.com",
    projectId: "glarium-57a05",
    storageBucket: "glarium-57a05.appspot.com",
    messagingSenderId: "142471243205",
    appId: "1:142471243205:web:d91db35d6fd0dc6aaa57ac",
    measurementId: "G-E0818NKXYN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const db = firebaseApp.firestore();

export {auth, providerGoogle, providerFacebook};
export default db;

