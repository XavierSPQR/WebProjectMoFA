const admin = require('firebase-admin');
// Corrected import for csv-parser
const parse = require('csv-parser');
const fs = require('fs');
const path = require('path');

// --- IMPORTANT SETUP ---
// Key should be in the 'scripts' folder and named 'serviceAccountKey.json'
// ---

// Construct the absolute path to the root of your project
const projectRoot = path.resolve(__dirname, '..'); 
const serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');
// The CSV file is in the root directory
const csvFilePath = path.join(projectRoot, 'statements.csv'); 

// Check if the service account key exists
if (!fs.existsSync(serviceAccountPath)) {
  console.error(`
    ERROR: Firebase service account key not found at: ${serviceAccountPath}
    Please follow these steps:
    1. Go to your Firebase project settings > \"Service accounts\".
    2. Click \"Generate new private key\".
    3. Rename the downloaded file to 'serviceAccountKey.json'.
    4. Place it inside the 'scripts' directory.
    
    Script will now exit.
  `);
  process.exit(1);
}

// Check if the CSV file exists
if (!fs.existsSync(csvFilePath)) {
    console.error(`
      ERROR: CSV file not found at: ${csvFilePath}
      Please ensure the 'statements.csv' file is in the root of your project directory.
      
      Script will now exit.
    `);
    process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const statementsCollection = db.collection('statements');

console.log(`Starting data import from: ${csvFilePath}`);

const results = [];
fs.createReadStream(csvFilePath)
  .pipe(parse()) // This will now work correctly
  .on('data', (data) => results.push(data))
  .on('end', async () => {
    console.log(`Finished reading CSV file. Found ${results.length} records. Starting upload to Firestore...`);

    const batch = db.batch();
    let count = 0;

    for (const record of results) {
      // Skip empty rows
      if (!record.title) {
        continue;
      }

      try {
        const docRef = statementsCollection.doc(); // Create a new doc with a random ID
        
        const data = {
          title: record.title,
          // Convert date string to Firestore Timestamp
          date: admin.firestore.Timestamp.fromDate(new Date(record.date)),
          excerpt: record.excerpt,
          fullContent: record.fullContent,
          category: record.category,
        };

        // Only add subCategory if it exists and is not empty in the CSV
        if (record.subCategory && record.subCategory.trim() !== '') {
          data.subCategory = record.subCategory;
        }

        batch.set(docRef, data);
        count++;

      } catch (error) {
        console.error(`Error processing record with title: \"${record.title}\"`, error);
      }
    }
    
    try {
        await batch.commit();
        console.log('--------------------');
        console.log(`Successfully uploaded ${count} documents to Firestore!`);
        console.log('Data import complete!');
        console.log('--------------------');
    } catch(error) {
        console.error('Error committing batch to Firestore:', error);
    }
  });
