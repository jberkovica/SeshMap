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
function getModuleAppreciationAverage(moduleName) {
    const category = "Appreciation";
    return calcAverage(moduleName, category);
}




// Calculate Normalized Average
function getModuleDifficultyAverageNormalized(moduleName) {
    const category = "Course Difficulty";
    return calcNormalizedAverage(moduleName, category);
}
function getModuleTimeAverageNormalized(moduleName) {
    const category = "Time";
    return calcNormalizedAverage(moduleName, category);
}
function getModuleQualityAverageNormalized(moduleName) {
    const category = "Quality";
    return calcNormalizedAverage(moduleName, category);
}
function getModuleSelfStudyAverageNormalized(moduleName) {
    const category = "Self-Learning";
    return calcNormalizedAverage(moduleName, category);
}
function getModuleLearningAverageNormalized(moduleName) {
    const category = "Learning";
    return calcNormalizedAverage(moduleName, category);
}
function getModuleInterestAverageNormalized(moduleName) {
    const category = "Interest";
    return calcNormalizedAverage(moduleName, category);
}
// function getModuleAppreciationAverageNormalized(moduleName) {
//     const category = "Appreciation";
//     return calcNormalizedAverage(moduleName, category);
// }


// Calculate total for each category and comparing results
// to sort modules from best to worst in each category

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

    if (category == 'Appreciation'){
        // console.log('Acceptable')
        // console.log(filteredData)
    }
    const average = totalScore / filteredData.length;
    return average.toFixed(2);
}

function calcNormalizedAverage(moduleName, category) {
    const filteredData = filterData(moduleName, category);
    const valuesMap = getValuesMap(category);
    const maxValue = getMaxValue(category);  
    const totalScore = filteredData.reduce((accumulator, value) => {
        return accumulator + (valuesMap[value] || 0);
    }, 0);

    if (category == 'Appreciation'){
        // console.log('Acceptable')
        // console.log(filteredData)
    }
    const normalizedAverage = totalScore / filteredData.length / maxValue *100;
    return normalizedAverage.toFixed(2);
}

// For all the categories and their value in 'values', assign a numerical
// score to the value string and return the numerical score.
function getValuesMap(category) {
    const values = surveyValues[category];
    const valuesMap = {};
    values.forEach((value, index) => {
        valuesMap[value] = index;
    });
    return valuesMap;
}

function getMaxValue(category){
    const values = surveyValues[category];
    const maxValue = values.length - 1 
    return maxValue;
}

export {
    getModuleDifficultyAverage,
    getModuleTimeAverage,
    getModuleQualityAverage,
    getModuleSelfStudyAverage,
    getModuleLearningAverage,
    getModuleInterestAverage,
    getModuleAppreciationAverage,
    getModuleDifficultyTotal,
    getModuleTimeTotal,
    getModuleQualityTotal,
    getModuleSelfStudyTotal,
    getModuleLearningTotal,
    getModuleInterestTotal,
    getModuleCombinedTotal,
    getModuleDifficultyAverageNormalized,
    getModuleTimeAverageNormalized,
    getModuleQualityAverageNormalized,
    getModuleSelfStudyAverageNormalized,
    getModuleLearningAverageNormalized,
    getModuleInterestAverageNormalized
};
