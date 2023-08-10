import jsonData from "./parsedData.json";
import surveyValues from "./surveys";

// Calculate average

function getModuleDifficultyAverage(moduleName) {
    const category = "Course Difficulty";
    return calcAverage(moduleName, category);
}
function getModuleTimeAverage(moduleName) {
    const category = "Time";
    return calcAverage(moduleName, category);
}
function getModuleQualityAverage(moduleName) {
    const category = "Quality";
    return calcAverage(moduleName, category);
}
function getModuleSelfStudyAverage(moduleName) {
    const category = "Self-Learning";
    return calcAverage(moduleName, category);
}
function getModuleLearningAverage(moduleName) {
    const category = "Learning";
    return calcAverage(moduleName, category);
}
function getModuleInterestAverage(moduleName) {
    const category = "Interest";
    return calcAverage(moduleName, category);
}
function getModuleCombinedAverage(moduleName) {
    //
}

// Calculate total for each category and comparing results
// to sort modules from best to worst in each category

// TODO: add level 6 categories

function getModuleDifficultyTotal(moduleName) {
    const category = "Course Difficulty";
    return calcTotal(moduleName, category);
}
function getModuleTimeTotal(moduleName) {
    const category = "Time";
    return calcTotal(moduleName, category);
}
function getModuleQualityTotal(moduleName) {
    const category = "Quality";
    return calcTotal(moduleName, category);
}
function getModuleSelfStudyTotal(moduleName) {
    const category = "Self-Learning";
    return calcTotal(moduleName, category);
}
function getModuleLearningTotal(moduleName) {
    const category = "Learning";
    return calcTotal(moduleName, category);
}
function getModuleInterestTotal(moduleName) {
    const category = "Interest";
    return calcTotal(moduleName, category);
}
function getModuleCombinedTotal(moduleName) {
    // TODO:
}

// Helper functions

function filterData(moduleName, category) {
    // Extract the data for the specified module and category
    const moduleData = jsonData[moduleName]?.[category] || [];
    // Remove "Not applicable" values and empty strings
    return moduleData.filter(value => value !== "Not applicable" && value !== "");
}

// Calculate the total score for the module
function calcTotal(moduleName, category) {
    const filteredData = filterData(moduleName, category);
    const valuesMap = getValuesMap(category);
    const totalScore = filteredData.reduce((accumulator, value) => {
        return accumulator + (valuesMap[value] || 0);
    }, 0);

    return totalScore;
}

function calcAverage(moduleName, category) {
    const filteredData = filterData(moduleName, category);
    const valuesMap = getValuesMap(category);
    const totalScore = filteredData.reduce((accumulator, value) => {
        return accumulator + (valuesMap[value] || 0);
    }, 0);

    const average = totalScore / filteredData.length;
    return average.toFixed(2);
}

function getValuesMap(category) {
    const values = surveyValues[category];
    const valuesMap = {};

    values.forEach((value, index) => {
        valuesMap[value] = index;
    });

    return valuesMap;
}

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
    getModuleCombinedTotal,
};
