import firebase from "firebase";
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import firebaseConfig from "./firebaseconfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {

    googleLogin: async ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider)
        return result;
    }
}