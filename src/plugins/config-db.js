import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyALFPYRQ0YiaXQ0xxa44ybFsF7vfChCPjw",
    authDomain: "covid-47880.firebaseapp.com",
    projectId: "covid-47880",
    storageBucket: "covid-47880.appspot.com",
    messagingSenderId: "666337726175",
    appId: "1:666337726175:web:0af9e1cfc9a36eff76a36a",
    measurementId: "G-N24TG89V5D"
});

const db = getFirestore(firebaseApp);
export default db;