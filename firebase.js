import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAvAWlLt9-7A_npgW8tzp8BUWmhX2HY8FU",
  authDomain: "facebook-cf778.firebaseapp.com",
  projectId: "facebook-cf778",
  storageBucket: "facebook-cf778.appspot.com",
  messagingSenderId: "264398214837",
  appId: "1:264398214837:web:5b1f3a061cb44f14c350fc",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
