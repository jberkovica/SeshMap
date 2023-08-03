import React, { useState } from "react";
import ModuleSelector from "./../components/ModuleSelector";
import LevelSelector from "./../components/LevelSelector";

function Resources() {
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedModule, setSelectedModule] = useState("");

    const handleLevelChange = level => {
        setSelectedLevel(level);
        // Clear the selected module when changing the level
        setSelectedModule("");
    };

    const handleModuleChange = module => {
        setSelectedModule(module);
    };

    return (
        // <div className="App">
        //     <LevelSelector
        //         selectedLevel={selectedLevel}
        //         onSelectLevel={handleLevelChange}
        //     />
        //     <ModuleSelector
        //         selectedLevel={selectedLevel}
        //         onSelectModule={handleModuleChange}
        //     />

        //     {/* Display the current selection */}
        //     {selectedLevel && selectedModule && (
        //         <div>
        //             <h2>Selected Level: {selectedLevel}</h2>
        //             <h2>Selected Module: {selectedModule}</h2>
        //         </div>
        //     )}
        // </div>
        <div>
            <div className="bg-secondary bg-opacity-25 p-5 rounded-lg">
                <div className="row">
                    <div className="col-md-6">
                        <p>Please select Level and Module</p>
                    </div>
                    <div className="col-md-6">
                        {/* <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="moduleDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Select Module
                        </button>
                        
                    </div> */}
                        <LevelSelector
                            selectedLevel={selectedLevel}
                            onSelectLevel={handleLevelChange}
                        />
                        <ModuleSelector
                            selectedLevel={selectedLevel}
                            onSelectModule={handleModuleChange}
                        />
                    </div>
                </div>
            </div>
            <h4>{selectedModule}</h4>
        </div>
    );
}

export default Resources;
