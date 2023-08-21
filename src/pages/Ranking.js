import React, { useState } from "react";
import LevelSelector from "./../components/LevelSelector";
import { RadarChart}  from "./../components/RankingCharts";
import { modules } from "../modules";
import {
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
} from "../helpers";

// import { getModuleDifficultyTotal, getModuleDifficultyAverage } from "../helpers";

function Ranking() {
    const [selectedLevel, setSelectedLevel] = useState("Level4");

    const handleLevelChange = level => {
        setSelectedLevel(level);
    };

    // TODO: have level4 selected by default
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
                            {/* <div className="col-md-6">
                                <ModuleSelector
                                    selectedLevel={selectedLevel}
                                    onSelectModule={handleModuleChange}
                                />
                            </div> */}
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
    // TODO: implement functions to retrive module position
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
        tableRows.push(
            <tr key={moduleKey}>
                <th scope="row">{module.id}</th>
                <td>{ModuleDifficultyAverage}</td>
                <td>{ModuleTimeAverage}</td>
                <td>{ModuleQualityAverage}</td>
                <td>{ModuleSelfStudyAverage}</td>
                <td>{ModuleLearningAverage}</td>
                {/* <td>{ModuleAppreciationAverage}</td> */}
                <td>{ModuleInterestAverage}</td>
                <td>{ModuleCombinedAverage.toFixed(2)}</td>
            </tr>
        );
    }

    // Start the ranking calculations
    moduledetails.forEach(module => {
        module.difficulty = module.values[0];
        module.time = module.values[1];
        module.quality = module.values[2];
        module.selfstudy = module.values[3];
        module.learning = module.values[4];
        module.interest = module.values[5];
        module.combined = module.values[6];
    }); 
    // Sort the modules based on their first values in descending order
    moduledetails.sort((a, b) => b.difficulty - a.difficulty);
    // Assign rankings based on module
    moduledetails.forEach((module, index) => {
        module.difficultyranking = index + 1;
    });    
    // Print module rankings
    moduledetails.forEach(module => {
        console.log(`${module.name} ranking: ${module.difficultyranking}`);
    });

  
    // const valueCount = moduledetails[0].values.length; // Assuming all modules have the same number of values    
    // for (let valueIndex = 0; valueIndex < valueCount; valueIndex++) {
    //     // Sort modules based on the value at the current index
    //     moduledetails.sort((a, b) => b.values[valueIndex] - a.values[valueIndex]);
    
    //     // Assign rankings for the current value index
    //     moduledetails.forEach((module, index) => {
    //         module[`ranking${valueIndex + 1}`] = index + 1;
    //     });
    // }    
    // // Print module rankings for each value index
    // moduledetails.forEach(module => {
    //     console.log(`${module.name} rankings:`, module);
    // });

    // After ranking, push the data into table rows
    // for (const moduleKey in selectedLevelData) {
    // }
    return tableRows;
};


const RadarCharts = ({ module }) => {
    const dataArray = [parseFloat(getModuleDifficultyAverage(module.name)),
                        parseFloat(getModuleTimeAverage(module.name)), 
                        parseFloat(getModuleQualityAverage(module.name)),
                        parseFloat(getModuleSelfStudyAverage(module.name)),
                        parseFloat(getModuleLearningAverage(module.name)),
                        parseFloat(getModuleInterestAverage(module.name))];
    const labels = ['Difficulty', 'Time', 'Quality', 'Self Study', 'Learning', 'Interest'];
    return <RadarChart dataArray={dataArray} labels={labels} title ={module.name} />;
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
                <h5 className="text-center mb-5 display-5">Modules ranking</h5>
                <div className="row mb-8">
                    {moduleArray.map((module, index) => (
                        <div key={index} className="col-md-3">
                            <RadarCharts module={module} />
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Ranking;
