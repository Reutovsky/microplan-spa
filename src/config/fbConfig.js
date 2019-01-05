import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBF14zm_uJROyhd1n014x2IZlBqQF562WQ",
  authDomain: "microplan-538bb.firebaseapp.com",
  databaseURL: "https://microplan-538bb.firebaseio.com",
  projectId: "microplan-538bb",
  storageBucket: "microplan-538bb.appspot.com",
  messagingSenderId: "857710489471"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;