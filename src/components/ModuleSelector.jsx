import React, { useState, useEffect } from "react";
import { getModulesForLevel, getAllModules } from "../modules";

const ModuleSelector = ({ selectedLevel, onSelectModule, id }) => {
    const savedModule = sessionStorage.getItem(id) || "";
    const [allModules, setAllModules] = useState([]);
    const [selectedModule, setSelectedModule] = useState(savedModule);
    // const [selectedModule, setSelectedModule] = useState("");

    useEffect(() => {
        if (!selectedLevel) {
            setAllModules(getAllModules());
        } else {
            setAllModules(getModulesForLevel(selectedLevel));
        }
    }, [selectedLevel]);

    const handleModuleChange = event => {
        const moduleSelected = event.target.value;
        setSelectedModule(moduleSelected);
        sessionStorage.setItem(id, moduleSelected); // Store the selection in sessionStorage
        onSelectModule(moduleSelected);
    };

    return (
        <div>
            <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleModuleChange}
                value={selectedModule}
            >
                <option defaultValue value="">
                    Select Module
                </option>
                {allModules?.map((module, index) => (
                    <option key={index} value={module}>
                        {module}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModuleSelector;
