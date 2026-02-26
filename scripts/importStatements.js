const admin = require('firebase-admin');
const parse = require('csv-parser');
const fs = require('fs');
const path = require('path');

// --- IMPORTANT SETUP ---
// Key should be in the 'scripts' folder and named 'serviceAccountKey.json'
// ---

const projectRoot = path.resolve(__dirname, '..');
const serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');
const csvFilePath = path.join(projectRoot, 'statements.csv');

if (!fs.existsSync(serviceAccountPath)) {
  console.error(`\nERROR: Firebase service account key not found at: ${serviceAccountPath}`);
  process.exit(1);
}

if (!fs.existsSync(csvFilePath)) {
  console.error(`\nERROR: CSV file not found at: ${csvFilePath}`);
  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const statementsCollection = db.collection('statements');

console.log(`Starting data import from: ${csvFilePath}`);

const records = [];
fs.createReadStream(csvFilePath)
  .pipe(parse())
  .on('data', (data) => records.push(data))
  .on('end', async () => {
    console.log(`Finished reading CSV file. Found ${records.length} records. Validating and uploading to Firestore...`);

    const batch = db.batch();
    let successfulCount = 0;

    for (const record of records) {
      if (!record.title) continue; // Skip empty rows

      try {
        const dateString = record.date;

        // 1. Validate: Check for empty date
        if (!dateString || !dateString.trim()) {
          console.warn(`SKIPPING: \"${record.title}\" - Reason: Date field is empty.`);
          continue;
        }

        // 2. Parse: Try to create a Date object
        const dateObj = new Date(dateString);

        // 3. Validate: Check if parsing was successful
        if (isNaN(dateObj.getTime())) {
          console.error(`SKIPPING: \"${record.title}\" - Reason: Could not parse date \"${dateString}\". Please use a standard format (e.g., YYYY-MM-DD or Month Day, YYYY).`);
          continue;
        }

        const docRef = statementsCollection.doc();
        const data = {
          title: record.title,
          date: admin.firestore.Timestamp.fromDate(dateObj),
          excerpt: record.excerpt,
          fullContent: record.fullContent,
          category: record.category,
        };

        if (record.subCategory && record.subCategory.trim() !== '') {
          data.subCategory = record.subCategory;
        }

        batch.set(docRef, data);
        successfulCount++;

      } catch (error) {
        console.error(`CRITICAL ERROR processing record with title: \"${record.title}\"`, error);
      }
    }

    if (successfulCount > 0) {
      try {
        await batch.commit();
        console.log('\n--------------------');
        console.log(`Successfully uploaded ${successfulCount} of ${records.length} documents to Firestore!`);
        console.log('Data import complete!');
        console.log('--------------------');
      } catch (error) {
        console.error('\nError committing batch to Firestore:', error);
      }
    } else {
      console.log('\n--------------------');
      console.log('Upload finished. No records were uploaded. Please check the warnings/errors above.');
      console.log('--------------------');
    }
  });
