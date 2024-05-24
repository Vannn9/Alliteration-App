const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('../../Documents/alliterationapp/alliteration-app-firebase-adminsdk-5pvuh-06925741d0.json'); // Download this from Firebase console

// Initialize Firebase
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// Import your JSON data
const data = require('./alliterations.json');

// Upload data to Firestore
const uploadData = async () => {
  const batch = db.batch();
  data.forEach(item => {
    const docRef = db.collection('alliterations').doc(item.id.toString());
    batch.set(docRef, item);
  });
  await batch.commit();
  console.log('Data successfully uploaded to Firestore');
};

uploadData().catch(console.error);
