import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDBe5A9GBFhdO8OWlIA-0Re62XfU0wZh90",
    authDomain: "crwn-db-ba659.firebaseapp.com",
    databaseURL: "https://crwn-db-ba659.firebaseio.com",
    projectId: "crwn-db-ba659",
    storageBucket: "crwn-db-ba659.appspot.com",
    messagingSenderId: "142383185921",
    appId: "1:142383185921:web:71b5604c11cc1ec2610000",
    measurementId: "G-38S5DJ57J0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
