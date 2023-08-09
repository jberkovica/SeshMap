// const express = require('express');
// const app = express();
// const fs = require('fs');
// const csvParser = require('csv-parser');

// // TODO: remove unused dependencies

// app.use(express.json());

// app.post('/upload', (req, res) => {
//   // Handle file upload and analysis here
// });

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });


// app.post('/upload', (req, res) => {

//   fs.createReadStream(req.body.filePath)
//     .pipe(csvParser())
//     .on('data', (data) => {
//       // Analyze data and calculate statistics

//     })
//     .on('end', () => {
//       // Calculate and send statistics as response

//     });
// });