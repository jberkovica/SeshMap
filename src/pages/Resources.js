import React, { useState } from "react";
import ModuleSelector from "./../components/ModuleSelector";
import LevelSelector from "./../components/LevelSelector";
import { findModuleByName } from "../modules";

function Resources() {
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedModule, setSelectedModule] = useState("");

    const handleLevelChange = level => {
        setSelectedLevel(level);
        // TODO: fix selected value
        // Clear the selected module when changing the level
        setSelectedModule("");
    };

    const handleModuleChange = module => {
        setSelectedModule(module);
    };

    // Accessing the name and code of the selected module
    const selectedModuleData = findModuleByName(selectedModule);
    if (selectedModuleData) {
        console.log(Object.keys(selectedModuleData));
        console.log(selectedModuleData.name);
    }
    // const moduleName = selectedModuleData.name;
    // const moduleCode = selectedModuleData.code;

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
            {/* {selectedModule !== "" ? (
                <h4 className="mt-5">{`${moduleCode} : ${moduleName}`}</h4>
            ) : null} */}
        </div>
    );
}

export default Resources;
