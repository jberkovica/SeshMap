import jsonData from "./parsedData.json";
// import { na, surveyValues } from "./surveys";

// average

function getModuleDifficultyAverage(moduleName) {
    return 0;
}
function getModuleTimeAverage(moduleName) {
    return 0;
}
function getModuleQualityAverage(moduleName) {
    return 0;
}
function getModuleSelfStudyAverage(moduleName) {
    return 0;
}
function getModuleLearningAverage(moduleName) {
    return 0;
}
function getModuleInterestAverage(moduleName) {
    return 0;
}
function getModuleCombinedAverage(moduleName) {
    return 0;
}

// calculating total for each category and comparing results
// to sort modules from best to worst in each category

function getModuleDifficultyTotal(moduleName) {
    // Extract the data for the specified module and category "Difficulty"
    const moduleData = jsonData[moduleName]?.["Course Difficulty"] || [];

    // Remove "Not applicable" values
    const filteredData = moduleData.filter(value => value !== "Not applicable");

    // Define difficulty values and their corresponding scores
    const difficultyValues = {
        "Very Difficult": 0,
        Difficult: 1,
        Moderate: 2,
        Easy: 3,
        "Very Easy": 4,
    };

    // Calculate the total difficulty score for the module
    const totalScore = filteredData.reduce((accumulator, value) => {
        return accumulator + (difficultyValues[value] || 0);
    }, 0);

    return totalScore;
}
function getModuleTimeTotal(moduleName) {
    return 0;
}
function getModuleQualityTotal(moduleName) {
    return 0;
}
function getModuleSelfStudyTotal(moduleName) {
    return 0;
}
function getModuleLearningTotal(moduleName) {
    return 0;
}
function getModuleInterestTotal(moduleName) {
    return 0;
}
// function getModuleCombinedTotal(moduleName) {
//     return 0;
// }

export {
    getModuleDifficultyAverage,
    getModuleTimeAverage,
    getModuleQualityAverage,
    getModuleSelfStudyAverage,
    getModuleLearningAverage,
    getModuleInterestAverage,
    getModuleCombinedAverage,
    getModuleDifficultyTotal,
    getModuleTimeTotal,
    getModuleQualityTotal,
    getModuleSelfStudyTotal,
    getModuleLearningTotal,
    getModuleInterestTotal,
};
