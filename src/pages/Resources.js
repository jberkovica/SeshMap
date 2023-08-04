import React, { useState } from "react";
import ModuleSelector from "./../components/ModuleSelector";
import LevelSelector from "./../components/LevelSelector";
import { findModuleByName } from "../modules";

function Resources() {
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedModule, setSelectedModule] = useState();

    const handleLevelChange = level => {
        setSelectedLevel(level);
        // TODO: fix selected value
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
            // TODO: add custom margin after heading
            // <div className="mt-5">

            <div className="container pt-5">
                <h3 className="text-center mb-5">
                    {selectedModuleData.code} : {selectedModuleData.name}
                </h3>
                <Syllabus selectedModuleData={selectedModuleData} />
                <Specification selectedModuleData={selectedModuleData} />
                <Slack selectedModuleData={selectedModuleData} />
                <Repl selectedModuleData={selectedModuleData} />
                <Midterm selectedModuleData={selectedModuleData} />
                <Final selectedModuleData={selectedModuleData} />
            </div>
            // </div>
        );
    } else {
        return <></>;
    }
};

const Syllabus = ({ selectedModuleData }) => {
    const syllabusURL = selectedModuleData?.syllabus;

    return (
        // <div className="grid gap-3 row-gap-3">
        <div className="row p-5">
            <div className="col-md-3">
                <h4 className="text-start">Syllabus</h4>
            </div>
            <div className="col-md-6">
                <p>Module structure and content with key concepts.</p>
            </div>
            <div className="col-md-3">
                {syllabusURL && (
                    <a href={syllabusURL} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary">
                            Open
                        </button>
                    </a>
                )}
            </div>
        </div>
        // </div>
    );
};

const Specification = ({ selectedModuleData }) => {
    const specificationURL = selectedModuleData?.specification;

    return (
        <div className="row p-5">
            <div className="col-md-3">
                <h4 className="text-start">Specification</h4>
            </div>
            <div className="col-md-6">
                <p>
                    Module aims, topics and learning outcomes as well as assessment
                    methods.
                </p>
            </div>
            <div className="col-md-3">
                {specificationURL && (
                    <a
                        href={specificationURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button type="button" className="btn btn-primary">
                            Open
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
};

const Slack = ({ selectedModuleData }) => {
    const slackURL = selectedModuleData?.slack;

    return (
        <div className="row p-5">
            <div className="col-md-3">
                <h4 className="text-start">Slack</h4>
            </div>
            <div className="col-md-6">
                <p>
                    This is direct link to module dedicated slack channel. It is best
                    practise to use this communication tool to discuss ongoing
                    problems.
                </p>
            </div>
            <div className="col-md-3">
                {slackURL && (
                    <a href={slackURL} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary">
                            Open
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
};

const Repl = ({ selectedModuleData }) => {
    const replURL = selectedModuleData?.repl;

    return (
        <div className="row p-5">
            <div className="col-md-3">
                <h4 className="text-start">REPL</h4>
            </div>
            <div className="col-md-6">
                <p>
                    REPL stands for Resources Enriching Perennial Learners. It is an
                    accumulation of resources collected by students including FAQs,
                    Notes and other useful resources.
                </p>
            </div>
            <div className="col-md-3">
                {replURL && (
                    <a href={replURL} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary">
                            Open
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
};

// TODO: improve midterm and final logic so there is link on past papers only if there are exams

const Midterm = ({ selectedModuleData }) => {
    const midtermURL = selectedModuleData?.midterm;

    return (
        <div className="row p-5">
            <div className="col-md-3">
                <h4 className="text-start">Midterm</h4>
            </div>
            <div className="col-md-6">
                <p>This is a link to available past midterms.</p>
            </div>
            <div className="col-md-3">
                {midtermURL && (
                    <a href={midtermURL} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary">
                            Open
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
};

const Final = ({ selectedModuleData }) => {
    const finalsURL = selectedModuleData?.final;

    return (
        <div className="row p-5">
            <div className="col-md-3">
                <h4 className="text-start">Final</h4>
            </div>
            <div className="col-md-6">
                <p>This is a link to past exams and available answer sheets.</p>
            </div>
            <div className="col-md-3">
                {finalsURL && (
                    <a href={finalsURL} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary">
                            Open
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
};

// TODO: add notes components
// TODO: maybe should add all data (like professor, language, etc) without buttons?

export default Resources;
