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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log ('error creating user', error.message);
    }
  }
  return userRef;
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // set up google authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;