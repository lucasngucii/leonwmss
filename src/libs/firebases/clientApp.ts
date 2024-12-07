import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from './config';

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
// Get a Functions instance
const functions = getFunctions(firebaseApp);

// Connect to the local emulator if in development
if (process.env.NODE_ENV === 'development') {
  connectFunctionsEmulator(functions, '127.0.0.1', 5001);
}

export { auth, db, firebaseApp, functions, storage };
