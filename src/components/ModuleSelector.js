import React from "react";
import { modules, getModulesForLevel } from "../modules";

const ModuleSelector = ({ selectedLevel, onSelectModule }) => {
    // Define modules based on the selected level
    const modulesByLevel = getModulesForLevel(selectedLevel);

    const handleModuleChange = event => {
        const selectedModule = event.target.value;
        onSelectModule(selectedModule);
    };

    return (
        <div>
            <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleModuleChange}
            >
                <option selected value="">
                    Select Module
                </option>
                {modulesByLevel?.map((module, index) => (
                    <option key={index} value={module}>
                        {module}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModuleSelector;
