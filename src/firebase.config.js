import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCatbDAjMszhzCrgly7TawibCWU7AF6BEI',
	authDomain: 'house-marketplace-app-6adbd.firebaseapp.com',
	projectId: 'house-marketplace-app-6adbd',
	storageBucket: 'house-marketplace-app-6adbd.appspot.com',
	messagingSenderId: '122001145221',
	appId: '1:122001145221:web:9f95a47cb7a5707d1c18ec',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
