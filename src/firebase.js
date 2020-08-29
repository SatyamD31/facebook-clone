import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAekuFwwkRnfTPsG3BOa6Wl8zMokENf3vw",
    authDomain: "facebook-clone-4fccb.firebaseapp.com",
    databaseURL: "https://facebook-clone-4fccb.firebaseio.com",
    projectId: "facebook-clone-4fccb",
    storageBucket: "facebook-clone-4fccb.appspot.com",
    messagingSenderId: "99718704269",
    appId: "1:99718704269:web:732c631f91b8db903786c4",
    measurementId: "G-GTHTKCTLPF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// telling firebase that we are using google auth service
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;