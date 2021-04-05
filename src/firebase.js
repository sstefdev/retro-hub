import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyDYEphVzouzOWxein81CTcjrQh7mlFB40c",
  authDomain: "retro-chat-rc01.firebaseapp.com",
  projectId: "retro-chat-rc01",
  storageBucket: "retro-chat-rc01.appspot.com",
  messagingSenderId: "157910403872",
  appId: "1:157910403872:web:0df5345883d4f6c71ee545",
  measurementId: "G-LYZ1JT85FS",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
