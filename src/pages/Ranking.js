import React, { useState } from "react";
import LevelSelector from "./../components/LevelSelector";
import { RadarChart}  from "../components/RadarChart";
import { BarChart} from "../components/BarChart";
import { modules } from "../modules";
import {
    getModuleDifficultyAverage,
    getModuleTimeAverage,
    getModuleQualityAverage,
    getModuleSelfStudyAverage,
    getModuleLearningAverage,
    getModuleInterestAverage
} from "../helpers";


function Ranking() {
    const [selectedLevel, setSelectedLevel] = useState("Level4");
    const handleLevelChange = level => {
        setSelectedLevel(level);
    };

    // TODO: save last selection to session store?
    return (
        <div>
            <div className="bg-secondary bg-opacity-25 p-5 rounded-lg">
                <div className="row">
                    <div className="col-md-6">
                        <p className="lead">Please select Level</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <LevelSelector
                                    selectedLevel={selectedLevel}
                                    onSelectLevel={handleLevelChange}
                                />
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </div>
            <LevelData selectedLevel={selectedLevel} />
        </div>
    );
}


const displayHeader = level => {
    const levelHeaders = {
        Level4: "Level 4",
        Level5: "Level 5",
        Level6: "Level 6",
    };

    return levelHeaders[level] || level;
};


const TableWithModuleData = ({ selectedLevelData }) => {
    const tableRows = [];
    for (const moduleKey in selectedLevelData) {
        const module = selectedLevelData[moduleKey];
        tableRows.push(
            <tr key={moduleKey}>
                <th scope="row">{module.id}</th>
                <td>{module.code}</td>
                <td>{module.name}</td>
                <td>{module.midterm}</td>
                <td>{module.final}</td>
                <td>{module.languages}</td>
                <td>{module.professor}</td>
            </tr>
        );
    }
    return tableRows;
};


const TableWithModuleRanking = ({ selectedLevelData }) => {

    // TODO: implelemt sorting in table by name or ranking, can me done with react-bootstrap-table-next
    const moduledetails = []
    const tableRows = [];    

    // Creating the dictionary of all modules for future ranking purposes
    for (const moduleKey in selectedLevelData) {
        const module = selectedLevelData[moduleKey];
        const ModuleDifficultyAverage = parseFloat(getModuleDifficultyAverage(module.name))
        const ModuleTimeAverage = parseFloat(getModuleTimeAverage(module.name))
        const ModuleQualityAverage = parseFloat(getModuleQualityAverage(module.name))
        const ModuleSelfStudyAverage = parseFloat(getModuleSelfStudyAverage(module.name))
        const ModuleLearningAverage = parseFloat(getModuleLearningAverage(module.name))
        // const ModuleAppreciationAverage = parseFloat(getModuleAppreciationAverage(module.name))
        const ModuleInterestAverage = parseFloat(getModuleInterestAverage(module.name))
        const ModuleCombinedAverage = (ModuleDifficultyAverage+ModuleTimeAverage+ModuleQualityAverage+ModuleSelfStudyAverage+ModuleInterestAverage)/5
        // Create an object to be pushed into moduledetails
        const newModule = {
            name: module.name,
            values: [ModuleDifficultyAverage, ModuleTimeAverage, ModuleQualityAverage, ModuleSelfStudyAverage, ModuleLearningAverage, ModuleInterestAverage, ModuleCombinedAverage]
        }
        moduledetails.push(newModule)
    }

    // Create a variable that sees how many metrics needed to be ranked
    // Calculates the no. based on the first module and assume others are the same
    const valueCount = moduledetails[0].values.length;   
    const metrics = ['difficulty', 'time', 'quality', 'selfstudy', 'learning', 'interest', 'total']
    for (let valueIndex = 0; valueIndex < valueCount; valueIndex++) {
        // Sort modules based on the value at the current index
        moduledetails.sort((a, b) => b.values[valueIndex] - a.values[valueIndex]);    
        // Assign rankings for the current value index
        moduledetails.forEach((module, index) => {
            module[`${metrics[valueIndex]}rank`] = index + 1;
        });
    }    

    // After ranking, push the data into table rows
    for (const moduleKey in selectedLevelData) {
        const moduleName = selectedLevelData[moduleKey].name;
        const extractedModule = moduledetails.find(module => module.name === moduleName)
        tableRows.push(
            <tr key={moduleKey}>
                <th scope="row">{moduleName}</th>
                <td>{extractedModule.difficultyrank}</td>
                <td>{extractedModule.timerank}</td>
                <td>{extractedModule.qualityrank}</td>
                <td>{extractedModule.selfstudyrank}</td>
                <td>{extractedModule.learningrank}</td>
                {/* <td>{ModuleAppreciationAverage}</td> */}
                <td>{extractedModule.interestrank}</td>
                <td>{extractedModule.totalrank}</td>
            </tr>
        );
    }
    return tableRows;
};


const RadarCharts = ({ module,index }) => {
    const colorArray = ['rgba(234, 85, 69)','rgba(244, 106, 155)','rgba(239, 155, 32)','rgba(237, 191, 51)',
    'rgba(187, 207, 50)','rgba(135, 188, 69)','rgba(39, 174, 239)','rgba(179, 61, 198)']
    const dataArray = [parseFloat(getModuleDifficultyAverage(module.name)),
                        parseFloat(getModuleTimeAverage(module.name)), 
                        parseFloat(getModuleQualityAverage(module.name)),
                        parseFloat(getModuleSelfStudyAverage(module.name)),
                        parseFloat(getModuleLearningAverage(module.name)),
                        parseFloat(getModuleInterestAverage(module.name))];
    const labels = ['Difficulty', 'Time', 'Quality', 'Self Study', 'Learning', 'Interest'];
    return <RadarChart dataArray={dataArray} labels={labels} title ={module.name} color = {colorArray[index]}/>;
}


const BarChartsDisplay = ({selectedLevelData}) => {
    const moduleNameArray = []
    const moduleIDArray = []
    for (const moduleKey in selectedLevelData){
        moduleNameArray.push(selectedLevelData[moduleKey].name)
        moduleIDArray.push(selectedLevelData[moduleKey].id)
    }  
    const labels = ['Difficulty', 'Time', 'Quality', 'Self Study', 'Learning', 'Interest'];
    const metricArray = []
    for (var i = 0; i < labels.length; i++){
        metricArray.push([])
    }

    moduleNameArray.forEach((module) => {
        metricArray[0].push(parseFloat(getModuleDifficultyAverage(module)))
        metricArray[1].push(parseFloat(getModuleTimeAverage(module)))
        metricArray[2].push(parseFloat(getModuleQualityAverage(module)))
        metricArray[3].push(parseFloat(getModuleSelfStudyAverage(module)))
        metricArray[4].push(parseFloat(getModuleLearningAverage(module)))
        metricArray[5].push(parseFloat(getModuleInterestAverage(module)))
    });
    console.log(metricArray[4])
    const barChartArray = []
    for (var i = 0; i < metricArray.length; i++){
        barChartArray.push(<div key = {labels[i]} className="col-4"> <BarChart dataArray={metricArray[i]} labels={moduleIDArray} title ={labels[i]} /> </div>) 
    } 
    return barChartArray
}


const LevelData = ({ selectedLevel }) => {
    // Accessing the name and code of the selected module
    const selectedLevelData = modules[selectedLevel];
    const moduleArray = []
    for (const moduleKey in selectedLevelData){
        moduleArray.push(selectedLevelData[moduleKey])
    }    

    if (selectedLevelData) {
        return (
            <div className="container pt-5">
                <h2 className="text-center mb-5 display-3">{displayHeader(selectedLevel)}</h2>
                {/* Module comparison */}
                {/* TODO: add sorting option by column */}
                <h5 className="text-center mb-5 display-5">Modules comparison</h5>
                <table className="table table-hover table-striped mb-5">
                    <thead>
                        <tr>
                            <th scope="col">Short</th>
                            <th scope="col">Code</th>
                            <th scope="col">Module Name</th>
                            <th scope="col">Midterm</th>
                            <th scope="col">Finals</th>
                            <th scope="col">Language(s)</th>
                            <th scope="col">Professor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableWithModuleData selectedLevelData={selectedLevelData} />
                    </tbody>
                </table>

                {/* Module ranking */}
                <h5 className="text-center mb-5 display-5">Modules ranking</h5>
                <table className="table table-hover table-fixed table-striped mt-5">
                    <thead>
                        <tr>
                            {/* TODO: list of headers should be the same as keys in surveys.js */}
                            <th scope="col">Short</th>
                            <th scope="col">Difficulty</th>
                            <th scope="col">Time</th>
                            <th scope="col">Quality</th>
                            <th scope="col">Self-Study</th>
                            <th scope="col">Learning</th>
                            {/* <th scope="col">Appreciation</th> */}
                            <th scope="col">Interest</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableWithModuleRanking selectedLevelData={selectedLevelData} />
                    </tbody>
                </table>               
       
                {/* Module Charts */}
                <h5 className="text-center mb-5 display-5">Module Features</h5>
                <div className="row mb-8">
                    {moduleArray.map((module, index) => (
                        <div key={index} className="col-md-3">
                            <RadarCharts module={module} index = {index}/>
                        </div>
                    ))}
                </div>
                <h5 className="text-center mb-5 display-5">Metrics Comparison</h5>
                <div className="row mb-4">
                    <BarChartsDisplay selectedLevelData={selectedLevelData} />
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Ranking;
