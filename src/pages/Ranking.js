import React, { useState } from "react";
import ModuleSelector from "./../components/ModuleSelector";
import LevelSelector from "./../components/LevelSelector";
import { findModuleByName } from "../modules";
import {
    calcModuleDifficulty,
    calcModuleTime,
    calcModuleQuality,
    calcModuleSelfStudy,
    calcModuleLearning,
    calcModuleInterest,
    calcModuleCombined,
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
                <p>Difficulty: {calcModuleDifficulty(selectedModuleData.id)}</p>
                <p>Time: {calcModuleTime(selectedModuleData.id)}</p>
                <p>Quality: {calcModuleQuality(selectedModuleData.id)}</p>
                <p>Self Study: {calcModuleSelfStudy(selectedModuleData.id)}</p>
                <p>Learning: {calcModuleLearning(selectedModuleData.id)}</p>
                <p>Interest: {calcModuleInterest(selectedModuleData.id)}</p>
                <p>Combined: {calcModuleCombined(selectedModuleData.id)}</p>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Ranking;
