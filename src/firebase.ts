const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyCqQxN8Zax89E0ZKgLmBm_18Cb_BMBVaWY",
  authDomain: "mohaba-e94c3.firebaseapp.com",
  databaseURL: "https://mohaba-e94c3.firebaseio.com",
  projectId: "mohaba-e94c3",
  storageBucket: "mohaba-e94c3.appspot.com",
  messagingSenderId: "725056425381",
  appId: "1:725056425381:web:83777409e86f01cf106c4c",
  measurementId: "G-3E0NVLQCLL",
};
// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
