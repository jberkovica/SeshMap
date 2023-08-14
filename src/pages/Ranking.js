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
    /* This is temporary data for testing puproses */
    /* <p>
        Difficulty total (sum):{" "}
        {getModuleDifficultyTotal(selectedModuleData.name)}
    </p>
    <p>
        Difficulty average:{" "}
        {getModuleDifficultyAverage(selectedModuleData.name)}
    </p> */

    // TODO: implement functions to retrive module position
    // TODO: implelemt sorting in table by name or ranking, can me done with react-bootstrap-table-next

    const tableRows = [];

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
    return tableRows;
};


const Charting = ({ module }) => {
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
                {moduleArray.map((module) => (
                    <Charting module={module} />
                ))}
                {/* <Charting  selectedLevelData={selectedLevelData} /> */}
                {/* <RankingCharts options={options} data={selectedLevelData}  /> */}
            </div>
        );
    } else {
        return <></>;
    }
};

export default Ranking;
