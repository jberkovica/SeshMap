import jsonData from './parsed-data.json';
import { valuesMap } from './surveys-values';

export const getModuleDifficultyAverageNormalized = (moduleName: string) => {
    const category = 'Course Difficulty';
    return calcNormalizedAverage(moduleName, category);
};

export const getModuleTimeAverageNormalized = (moduleName: string) => {
    const category = 'Time';
    return calcNormalizedAverage(moduleName, category);
};

export const getModuleQualityAverageNormalized = (moduleName: string) => {
    const category = 'Quality';
    return calcNormalizedAverage(moduleName, category);
};

export const getModuleSelfStudyAverageNormalized = (moduleName: string) => {
    const category = 'Self-Learning';
    return calcNormalizedAverage(moduleName, category);
};

export const getModuleLearningAverageNormalized = (moduleName: string) => {
    const category = 'Learning';
    return calcNormalizedAverage(moduleName, category);
};

export const getModuleInterestAverageNormalized = (moduleName: string) => {
    const category = 'Interest';
    return calcNormalizedAverage(moduleName, category);
};

export const filterData = (moduleName: string, category: string) => {
    // Extract the data for the specified module and category
    // @ts-ignore
    const moduleData = jsonData[moduleName]?.[category] || [];
    // Remove "Not applicable" values and empty strings
    return moduleData.filter(
        (value: string) => value !== 'Not applicable' && value !== ''
    );
};

export const calcNormalizedAverage = (moduleName: string, category: string) => {
    const filteredData = filterData(moduleName, category);
    // @ts-ignore
    const values = valuesMap[category];
    // @ts-ignore
    const maxValue = Math.max(...Object.values(values));
    const totalScore = filteredData.reduce(
        (accumulator: number, value: string) => {
            return accumulator + (values[value] || 0);
        },
        0
    );

    // maxValue * filteredData.length is the maximum possible total score that
    // could be obtained if every value in filteredData had the maximum possible score
    // Therefore, (totalScore / (maxValue * filteredData.length)) is the fraction
    // of the maximum possible total score that was actually obtained.
    // Multiplying this by 100 converts this fraction to a percentage.
    const normalizedAverage =
        (totalScore / (maxValue * filteredData.length)) * 100;
    return normalizedAverage.toFixed(2);
};

export const getModuleValueByCategory = (
    moduleName: string,
    category: string
) => {
    const average = calcNormalizedAverage(moduleName, category);
    // retrieve values for category
    // @ts-ignore
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

    let textValue = '-'; // default value for module component

    const keys = Object.keys(values);
    for (let index = 0; index < keys.length; index++) {
        // @ts-ignore
        if (average <= step * (index + 1)) {
            // found value
            textValue = keys[index];
            break; // Exit the loop when the condition is met
        }
    }

    return textValue;
};
