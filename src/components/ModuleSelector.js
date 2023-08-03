import React from "react";
import { getModulesForLevel } from "../modules";

const ModuleSelector = ({ selectedLevel, onSelectModule }) => {
    // Define modules based on the selected level
    const modulesByLevel = getModulesForLevel(selectedLevel);

    const handleModuleChange = event => {
        const selectedModule = event.target.value;
        onSelectModule(selectedModule);
    };

    // TODO: fix selected value

    return (
        <div>
            <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleModuleChange}
            >
                <option defaultValue value="">
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
