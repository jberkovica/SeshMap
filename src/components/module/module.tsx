'use client';
import { useState, useEffect } from 'react';
import './module.css';
import { ModuleSelector } from './module-selector';
import { getModuleValueByCategory } from '@/utils/helpers';
import { findModuleByName, ModuleType } from './utils';

export type ModuleProps = {
    id: string;
};
export function Module({ id }: ModuleProps) {
    const [module, setModule] = useState<ModuleType | null>(null);
    const [moduleId, setModuleId] = useState(sessionStorage.getItem(id) || '');

    useEffect(() => {
        // Fetch data from your functions here
        setModule(findModuleByName(moduleId));
    }, [moduleId]);

    const handleModuleChange = (moduleId: string) => {
        setModuleId(moduleId);
    };

    return (
        <div className="module-container px-4 pt-4">
            <ModuleSelector
                selectedLevel=""
                onSelectModule={handleModuleChange}
                id={id}
            />
            {/* Render your data below. Example: */}
            <div className="p-3">
                <p className="module-data mb-3">
                    {module
                        ? getModuleValueByCategory(
                              module.name,
                              'Course Difficulty'
                          )
                        : '-'}
                </p>
                <p className="module-data mb-3">
                    {module
                        ? getModuleValueByCategory(module.name, 'Time')
                        : '-'}
                </p>
                <p className="module-data mb-3">
                    {module
                        ? getModuleValueByCategory(module.name, 'Quality')
                        : '-'}
                </p>
                <p className="module-data mb-3">
                    {module
                        ? getModuleValueByCategory(module.name, 'Self-Learning')
                        : '-'}
                </p>
                <p className="module-data mb-3">
                    {module
                        ? getModuleValueByCategory(module.name, 'Learning')
                        : '-'}
                </p>
                <p className="module-data mb-3">
                    {module
                        ? getModuleValueByCategory(module.name, 'Interest')
                        : '-'}
                </p>
                <p className="module-data mb-3">
                    {module ? module.midterm : '-'}
                </p>
                <p className="module-data mb-3">
                    {module ? module.final : '-'}
                </p>
            </div>
        </div>
    );
}

export default Module;
