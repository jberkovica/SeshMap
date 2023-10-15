'use client';
import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { getModulesForLevel, getAllModules } from '../utils';

export type ModuleSelectorProps = {
    selectedLevel: string;
    onSelectModule(moduleId: string): void;
    id: string;
};

export function ModuleSelector({
    selectedLevel,
    onSelectModule,
    id,
}: ModuleSelectorProps) {
    const savedModule = sessionStorage.getItem(id) || '';
    const [allModules, setAllModules] = useState<string[]>([]);
    const [selectedModule, setSelectedModule] = useState(savedModule);
    // const [selectedModule, setSelectedModule] = useState("");

    useEffect(() => {
        if (!selectedLevel) {
            setAllModules(getAllModules());
        } else {
            setAllModules(getModulesForLevel(selectedLevel));
        }
    }, [selectedLevel]);

    const handleModuleChange: ChangeEventHandler<HTMLSelectElement> = (
        event
    ) => {
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
                <option value="">Select Module</option>
                {allModules?.map((module, index) => (
                    <option key={index} value={module}>
                        {module}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ModuleSelector;
