// lib/firebaseAdmin.ts
import * as admin from 'firebase-admin';

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}',
);
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const admin_auth = admin.auth();
export const admin_db = admin.firestore(); // If you also want to use Firestore
export const verifyIdToken = async (token: string) => {
  if (!token) {
    throw new Error('Token is required');
  }
  return admin.auth().verifyIdToken(token);
};
