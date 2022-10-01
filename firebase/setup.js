import firebase from "firebase/compat/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDb70r-yWeyquWRaRa0oYfkhxkspRRuzhA",
  authDomain: "hackoverflow-fd988.firebaseapp.com",
  projectId: "hackoverflow-fd988",
  storageBucket: "hackoverflow-fd988.appspot.com",
  messagingSenderId: "20913669676",
  appId: "1:20913669676:web:c49413d5f7bb74bda07389",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
