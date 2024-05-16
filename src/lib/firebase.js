import {
	getAuth,
	GoogleAuthProvider,
	signInWithRedirect,
	signInWithPopup,
	signOut
} from 'firebase/auth';
import {
	collection,
	doc,
	getFirestore,
	setDoc,
	query,
	getDocs,
	getDoc,
	updateDoc
} from 'firebase/firestore';
import { isLoggedIn, user } from '$lib/stores.js';

import { initializeApp } from 'firebase/app';
const firebaseConfig = {
	apiKey: 'AIzaSyBuqNFGTrnWG5mUvrv1kaniNjRXUtBzKgY',
	authDomain: 'english-time-d4fbb.firebaseapp.com',
	projectId: 'english-time-d4fbb',
	storageBucket: 'english-time-d4fbb.appspot.com',
	messagingSenderId: '838082857458',
	appId: '1:838082857458:web:a43eb4ac2ffc138221c36b'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = (() => {
	const authInfo = getAuth(app);

	const logInWithRedirect = async () => {
		const GProvider = new GoogleAuthProvider();
		const res = signInWithRedirect(authInfo, GProvider);

		return res;
	};
	const loginWithPopUp = async () => {
		const GProvider = new GoogleAuthProvider();
		const res = await signInWithPopup(authInfo, GProvider);
		return res;
	};
	const logOut = async () => {
		try {
			await signOut(authInfo);
			isLoggedIn.set(false);
			user.set({});
		} catch (error) {
			console.error(error);
		}
	};

	return {
		authInfo,
		logInWithRedirect,
		loginWithPopUp,
		logOut
	};
})();

export const Database = (() => {
	const db = getFirestore(app);

	const getDocuments = async (collName = '') => {
		const colRef = collection(db, collName);
		const docQuery = query(colRef);
		const querySanpshot = (await getDocs(docQuery)).docs;

		const collections = [];
		for (const doc of querySanpshot) collections.push({ ...doc.data() });
		return collections;
	};

	const getDocument = async (collName = '', docName = '') => {
		const docRef = doc(db, collName, docName);
		const docSnapshot = await getDoc(docRef);

		return docSnapshot.data();
	};

	const addData = (path, docName, docData) => {
		const docRef = doc(db, path, docName);

		return setDoc(docRef, { ...docData });
	};

	const updateData = async (collName, docName, data, propName) => {
		const docRef = doc(db, collName, docName);
		const examData = {};

		examData[propName] = data;
		updateDoc(docRef, { ...examData });
	};

	return { db, getDocuments, getDocument, addData, updateData };
})();

export const User = (() => {
	const addUser = async (user) => {
		const { displayName, uid, email } = user;
		const docRef = doc(Database.db, 'users', uid);

		await setDoc(docRef, {
			name: displayName,
			uid,
			email,
			exams: []
		});
	};

	const getUser = async (uid) => {
		const document = doc(Database.db, 'users', uid);
		const docSnapshot = await getDoc(document);
		return docSnapshot.data();
	};

	return { addUser, getUser };
})();
