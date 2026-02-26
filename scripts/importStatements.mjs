
import admin from 'firebase-admin';
import { parse } from 'csv-parser';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// --- IMPORTANT SETUP ---
// 1. DOWNLOAD YOUR FIREBASE SERVICE ACCOUNT KEY
//    - Go to your Firebase project settings > "Service accounts".
//    - Click "Generate new private key" and save the JSON file.
// 2. PLACE THE KEY IN THE 'scripts' FOLDER
//    - Rename the downloaded file to 'serviceAccountKey.json'.
//    - Place it inside the 'scripts' directory.
// -----------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to your service account key and CSV file
const serviceAccountPath = join(__dirname, 'serviceAccountKey.json');
const csvFilePath = join(__dirname, 'statements.csv');

// Check if the service account key exists
if (!fs.existsSync(serviceAccountPath)) {
  console.error(`
    ERROR: Firebase service account key not found.
    Please follow these steps:
    1. Go to your Firebase project settings > "Service accounts".
    2. Click "Generate new private key" and save the JSON file.
    3. Rename the file to 'serviceAccountKey.json'.
    4. Place it inside the 'scripts' directory.
    
    Script will now exit.
  `);
  process.exit(1);
}

import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const statementsCollection = db.collection('statements');

console.log('Starting data import from CSV...');

const results = [];
fs.createReadStream(csvFilePath)
  .pipe(parse())
  .on('data', (data) => results.push(data))
  .on('end', async () => {
    console.log(`Finished reading CSV file. Found ${results.length} records. Starting upload to Firestore...`);

    for (const record of results) {
      try {
        const docRef = await statementsCollection.add({
          title: record.title,
          // Convert date string to Firestore Timestamp
          date: admin.firestore.Timestamp.fromDate(new Date(record.date)),
          excerpt: record.excerpt,
          fullContent: record.fullContent,
          category: record.category,
          // Only add subCategory if it exists in the CSV
          ...(record.subCategory && { subCategory: record.subCategory })
        });
        console.log(`Successfully added document with ID: ${docRef.id}`);
      } catch (error) {
        console.error(`Error adding document for title: "${record.title}"`, error);
      }
    }
    console.log('--------------------');
    console.log('Data import complete!');
    console.log('--------------------');
  });
