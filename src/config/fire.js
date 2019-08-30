import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD0Uy3gzv_9DdN4bfm1acphu-3ZCg2-woo",
  authDomain: "react-phoneauth-c4da1.firebaseapp.com",
  databaseURL: "https://react-phoneauth-c4da1.firebaseio.com",
  projectId: "react-phoneauth-c4da1",
  storageBucket: "",
  messagingSenderId: "1087767553937",
  appId: "1:1087767553937:web:5b155597a93a49aa"
};

const fire = firebase.initializeApp(config);
export default fire;