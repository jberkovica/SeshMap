import React, { useState } from "react";
import ModuleSelector from "./../components/ModuleSelector";
import LevelSelector from "./../components/LevelSelector";
import { findModuleByName } from "../modules";
import {
    getModuleDifficulty,
    getModuleTime,
    getModuleQuality,
    getModuleSelfStudy,
    getModuleLearning,
    getModuleInterest,
    getModuleCombined,
} from "../helpers";

function Ranking() {
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedModule, setSelectedModule] = useState();

    const handleLevelChange = level => {
        setSelectedLevel(level);
        // Clear the selected module when changing the level
        setSelectedModule("");
    };

    const handleModuleChange = module => {
        setSelectedModule(module);
    };

    return (
        <div>
            <div className="bg-secondary bg-opacity-25 p-5 rounded-lg">
                <div className="row">
                    <div className="col-md-6">
                        <p>Please select Level and Module</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <LevelSelector
                                    selectedLevel={selectedLevel}
                                    onSelectLevel={handleLevelChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <ModuleSelector
                                    selectedLevel={selectedLevel}
                                    onSelectModule={handleModuleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModuleData selectedModule={selectedModule} />
        </div>
    );
}

const ModuleData = ({ selectedModule }) => {
    // Accessing the name and code of the selected module
    const selectedModuleData = findModuleByName(selectedModule);

    if (selectedModuleData) {
        return (
            <div className="container pt-5">
                <h3 className="text-center mb-5">
                    {selectedModuleData.code} : {selectedModuleData.name}
                </h3>
                {/* This is temporary data for testing puproses */}
                <p>Difficulty: {getModuleDifficulty(selectedModuleData.name)}</p>
                <p>Time: {getModuleTime(selectedModuleData.name)}</p>
                <p>Quality: {getModuleQuality(selectedModuleData.name)}</p>
                <p>Self Study: {getModuleSelfStudy(selectedModuleData.name)}</p>
                <p>Learning: {getModuleLearning(selectedModuleData.name)}</p>
                <p>Interest: {getModuleInterest(selectedModuleData.name)}</p>
                <p>Combined: {getModuleCombined(selectedModuleData.name)}</p>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Ranking;
