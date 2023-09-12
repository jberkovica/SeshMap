import jsonData from "./parsedData.json";
import valuesMap from "./surveysValues";

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

function filterData(moduleName, category) {
    // Extract the data for the specified module and category
    const moduleData = jsonData[moduleName]?.[category] || [];
    // Remove "Not applicable" values and empty strings
    return moduleData.filter(value => value !== "Not applicable" && value !== "");
}

function calcNormalizedAverage(moduleName, category) {
    const filteredData = filterData(moduleName, category);
    const values = valuesMap[category];
    const maxValue = Math.max(...Object.values(values));
    const totalScore = filteredData.reduce((accumulator, value) => {
        return accumulator + (values[value] || 0);
    }, 0);

    // maxValue * filteredData.length is the maximum possible total score that
    // could be obtained if every value in filteredData had the maximum possible score
    // Therefore, (totalScore / (maxValue * filteredData.length)) is the fraction
    // of the maximum possible total score that was actually obtained.
    // Multiplying this by 100 converts this fraction to a percentage.
    const normalizedAverage = (totalScore / (maxValue * filteredData.length)) * 100;
    return normalizedAverage.toFixed(2);
}

function getModuleValueByCategory(moduleName, category) {
    const average = calcNormalizedAverage(moduleName, category);
    // retrieve values for category
    const values = valuesMap[category];

    // values example
    // "Final Difficulty": {
    //     "Very Easy": 1, -> 20%
    //     "Easy": 2, -> 40%
    //     "Moderate": 3, -> 60%
    //     "Difficult": 4, -> 80%
    //     "Very Difficult": 5, -> 100%
    // },

    const step = Math.round(100 / Object.keys(values).length);

    let textValue = "-"; // default value for module component

    const keys = Object.keys(values);
    for (let index = 0; index < keys.length; index++) {
        if (average <= step * (index + 1)) {
            // found value
            textValue = keys[index];
            break; // Exit the loop when the condition is met
        }
    }

    return textValue;
}

export {
    getModuleDifficultyAverageNormalized,
    getModuleTimeAverageNormalized,
    getModuleQualityAverageNormalized,
    getModuleSelfStudyAverageNormalized,
    getModuleLearningAverageNormalized,
    getModuleInterestAverageNormalized,
    getModuleValueByCategory,
};
