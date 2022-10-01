import firebase from "firebase/compat/app";

// export const firebaseConfig = {
//   apiKey: "AIzaSyDb70r-yWeyquWRaRa0oYfkhxkspRRuzhA",
//   authDomain: "hackoverflow-fd988.firebaseapp.com",
//   projectId: "hackoverflow-fd988",
//   storageBucket: "hackoverflow-fd988.appspot.com",
//   messagingSenderId: "20913669676",
//   appId: "1:20913669676:web:c49413d5f7bb74bda07389",
// };
export const firebaseConfig = {
  apiKey: "AIzaSyAogpOt19NETXTFKgl2WsMnZLcYOieaydo",
  authDomain: "testing-server-hackoverflow.firebaseapp.com",
  projectId: "testing-server-hackoverflow",
  storageBucket: "testing-server-hackoverflow.appspot.com",
  messagingSenderId: "855061709148",
  appId: "1:855061709148:web:6177e63610f197d05f4199",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
