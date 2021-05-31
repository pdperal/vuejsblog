import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCWGjcqD2Rl2bITMK1LRFX4lWe0an1p0rM",
    authDomain: "vuejstest-74c83.firebaseapp.com",
    projectId: "vuejstest-74c83",
    storageBucket: "vuejstest-74c83.appspot.com",
    messagingSenderId: "353282824753",
    appId: "1:353282824753:web:236a1a41adbd9dd35c1310"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();