// // TODO: please implement function to read CSV data and return values similar to GNL
// // Assuming it will take arguments Level+Module name

// // const fetch = require('node-fetch');
// const fs = require('fs');
// const path = require('path');

// const csvFilePath = path.join(__dirname, '../public/data/Level4.csv');
// let extractedHeaders;

// function readFile(){fs.promises.readFile(csvFilePath, 'utf-8')
// .then(csvData => {
//     const rows = csvData.split('\n'); // Split CSV data into rows
//     extractedHeaders = rows[0].split(','); // Extract headers from the first row

//     const nestedArray = [];

//     for (let i = 1; i < extractedHeaders.length; i++) {
//         nestedArray[i - 1] = [];
//     }

//     for (let i = 1; i < rows.length; i++) {
//         const values = rows[i].split(',');
//         if (values.length === extractedHeaders.length) {
//         for (let j = 1; j < values.length; j++) {
//             nestedArray[j - 1].push(values[j]);
//         }
//         }
//     }

//     // console.log(nestedArray[0]); // Display the transposed nested array
//     // Remove the first element from the array
//     extractedHeaders.shift()
//     console.log(extractedHeaders.length)
//     console.log(nestedArray.length)
//     })
//     .catch(error => {
//     console.error('Error reading or parsing CSV data:', error);
//     });
// }

// readFile()
// // console.log('External: '+extractedHeaders.length)

  
// // Helper function helper, gets the value and return the key
// function getKeyByValue(obj, value) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key) && obj[key] === value) {
//             return key;
//         }
//     }
//     return null; // Return null if the value is not found
// }

// // Calculate the difficulty average from an array of difficulty values
// function calculateDifficultyAverage(difficultyArray) {
//     const difficultyValueMap = {
//         "Very Easy": 1,
//         Easy: 2,
//         Moderate: 3,
//         Difficult: 4,
//         "Very Difficult": 5,
//     };

//     const totalValidEntries = 0;
//     const totalScore = 0;
//     const averageScore = 0;

//     for (var i = 0; i < difficultyArray.length; i++) {
//         // If there are no empty strings ie. unfilled entries
//         if (difficultyArray[i] != "") {
//             totalScore += difficultyValueMap[difficultyArray[i]];
//             totalValidEntries++;
//         }
//     }

//     averageScore = totalScore / totalValidEntries;
//     return getKeyByValue(difficultyValueMap, averageScore);
// }

// // Value mappings for other items, will implement once main module can be tested to work
// const qualityValueMap = {
//     "Very Poor": 1,
//     Poor: 2,
//     Normal: 3,
//     Good: 4,
//     "Very Good": 5,
// };

// const selfLearningValueMap = {};

// const learningValueMap = {
//     // 'Not Applicable': 0,
//     Nothing: 1,
//     "A Little": 2,
//     "A Good Amount": 3,
//     "A Lot": 4,
// };

// const interestValueMap = {
//     "Very Boring": 1,
//     Boring: 2,
//     Fine: 3,
//     Interesting: 4,
//     "Very Interesting": 5,
// };

// function calcModuleDifficulty(moduleName) {
//     // for (var i = 0; i<8;i++){
//     //     if
//     // }
//     return 0;
// }
// function calcModuleTime(moduleName) {
//     return 0;
// }
// function calcModuleQuality(moduleName) {
//     return 0;
// }
// function calcModuleSelfStudy(moduleName) {
//     return 0;
// }
// function calcModuleLearning(moduleName) {
//     return 0;
// }
// function calcModuleInterest(moduleName) {
//     return 0;
// }
// function calcModuleCombined(moduleName) {
//     return 0;
// }

