import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ib, cd: issue: you should keep these values hidden. you don't want to leak your secret keys because people can
// take it and use your account. typically, "secret" values are kept in environment files (.env) or on the server
const firebaseConfig = {
	apiKey: "AIzaSyAJ5EI_Ysymz3wKrMwo2HKP3qZa2dFdoBs",
	authDomain: "portfolio-1ac15.firebaseapp.com",
	projectId: "portfolio-1ac15",
	storageBucket: "portfolio-1ac15.appspot.com",
	messagingSenderId: "273056637602",
	appId: "1:273056637602:web:8987282ebf09195def2dfb",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app);

export { database, collection, getDocs, storage };
