import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC23h0f2wSm_wBDPZ2SoYafNb7ARJ22w0k",
    authDomain: "shoppedin-db.firebaseapp.com",
    databaseURL: "https://shoppedin-db.firebaseio.com",
    projectId: "shoppedin-db",
    storageBucket: "shoppedin-db.appspot.com",
    messagingSenderId: "689967661739",
    appId: "1:689967661739:web:b9ee04fd150099b3522dee",
    measurementId: "G-H6VHK1X9TG"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // set up google authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;