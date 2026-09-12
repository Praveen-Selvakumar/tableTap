import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs
} from
    "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQp3SzKyJRSW4iAKgtVRATLkdm55y4JHQ",
  authDomain: "tabletap-3c1b9.firebaseapp.com",
  projectId: "tabletap-3c1b9",
  storageBucket: "tabletap-3c1b9.firebasestorage.app",
  messagingSenderId: "17540244686",
  appId: "1:17540244686:web:56ccafb9b204c2a7e3dc9f",
  measurementId: "G-D44K3WDNTB"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export { db };