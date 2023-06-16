import firebase from 'firebase/app'
import "firebase/auth"

export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyDPe3C69xLjr0XD61GWUU15NCH0Sy6h8G4",
  authDomain: "unichat-c3ffa.firebaseapp.com",
  projectId: "unichat-c3ffa",
  storageBucket: "unichat-c3ffa.appspot.com",
  messagingSenderId: "1082429759674",
  appId: "1:1082429759674:web:2920ddb8d79230b2cbe283"
}).auth();