// TODO: please implement function to read CSV data and return values similar to GNL
// Assuming it will take arguments Level+Module name
// Assignee: @vincent

// TODO: process CSV to some object maybe?
function parseCSVData(csvData) {
    const lines = csvData.split("\n");
    const headers = lines[0].split(",");
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(",");
        if (currentLine.length === headers.length) {
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentLine[j];
            }
            result.push(obj);
        }
    }
    return result;
}

// Function to handle the fetched CSV data
function handleCSVData(csvData) {
    const parsedData = parseCSVData(csvData);
    return parsedData; // Return the parsed data
}

// Fetch the CSV file
fetch("./data/Level4.csv")
    .then(response => response.text())
    .then(handleCSVData)
    .then(parsedData => {
        // The parsedData variable will hold the result
        // console.log(parsedData);
        // You can now use the parsedData variable as needed
    })
    .catch(error => console.error("Error fetching the CSV file:", error));

// Helper function helper, gets the value and return the key
function getKeyByValue(obj, value) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            return key;
        }
    }
    return null; // Return null if the value is not found
}

// Calculate the difficulty average from an array of difficulty values
function calculateDifficultyAverage(difficultyArray) {
    const difficultyValueMap = {
        "Very Easy": 1,
        Easy: 2,
        Moderate: 3,
        Difficult: 4,
        "Very Difficult": 5,
    };

    const totalValidEntries = 0;
    const totalScore = 0;
    const averageScore = 0;

    for (var i = 0; i < difficultyArray.length; i++) {
        // If there are no empty strings ie. unfilled entries
        if (difficultyArray[i] != "") {
            totalScore += difficultyValueMap[difficultyArray[i]];
            totalValidEntries++;
        }
    }

    averageScore = totalScore / totalValidEntries;
    return getKeyByValue(difficultyValueMap, averageScore);
}

// Value mappings for other items, will implement once main module can be tested to work
const qualityValueMap = {
    "Very Poor": 1,
    Poor: 2,
    Normal: 3,
    Good: 4,
    "Very Good": 5,
};

const selfLearningValueMap = {};

const learningValueMap = {
    // 'Not Applicable': 0,
    Nothing: 1,
    "A Little": 2,
    "A Good Amount": 3,
    "A Lot": 4,
};

const interestValueMap = {
    "Very Boring": 1,
    Boring: 2,
    Fine: 3,
    Interesting: 4,
    "Very Interesting": 5,
};

function calcModuleDifficulty(moduleId) {
    return 0;
}
function calcModuleTime(moduleId) {
    return 0;
}
function calcModuleQuality(moduleId) {
    return 0;
}
function calcModuleSelfStudy(moduleId) {
    return 0;
}
function calcModuleLearning(moduleId) {
    return 0;
}
function calcModuleInterest(moduleId) {
    return 0;
}
function calcModuleCombined(moduleId) {
    return 0;
}

export {
    calcModuleDifficulty,
    calcModuleTime,
    calcModuleQuality,
    calcModuleSelfStudy,
    calcModuleLearning,
    calcModuleInterest,
    calcModuleCombined,
};
