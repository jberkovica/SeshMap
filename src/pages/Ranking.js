import React, { useState } from "react";
import LevelSelector from "./../components/LevelSelector";
import { modules } from "../modules";
// import { getModuleDifficultyTotal, getModuleDifficultyAverage } from "../helpers";

function Ranking() {
    const [selectedLevel, setSelectedLevel] = useState("");

    const handleLevelChange = level => {
        setSelectedLevel(level);
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
                            <div className="col-md-6"></div>
                            {/* <div className="col-md-6">
                                <ModuleSelector
                                    selectedLevel={selectedLevel}
                                    onSelectModule={handleModuleChange}
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <ModuleData selectedLevel={selectedLevel} />
        </div>
    );
}

const ModuleData = ({ selectedLevel }) => {
    // Accessing the name and code of the selected module
    const selectedLevelData = modules[selectedLevel];

    if (selectedLevelData) {
        return (
            <div className="container pt-5">
                <h2 className="text-center mb-5">{selectedLevel}</h2>
                {/* This is temporary data for testing puproses */}
                {/* <p>
                    Difficulty total (sum):{" "}
                    {getModuleDifficultyTotal(selectedModuleData.name)}
                </p>
                <p>
                    Difficulty average:{" "}
                    {getModuleDifficultyAverage(selectedModuleData.name)}
                </p> */}

                {/* Module comparison */}
                {/* TODO: add sorting option by column */}
                <h5 className="text-center mb-5">Modules comparison</h5>
                <table className="table table-striped mb-5">
                    <thead>
                        <tr>
                            <th scope="col">Short</th>
                            <th scope="col">Code</th>
                            <th scope="col">Module Name</th>
                            <th scope="col">Midterm</th>
                            <th scope="col">Finals</th>
                            <th scope="col">Language(s)</th>
                            <th scope="col">Professor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">ITP1</th>
                            <td>CM1005</td>
                            <td>Introduction to Programming I</td>
                            <td>Projects (50%)</td>
                            <td>Projects (50%)</td>
                            <td>JS (p5.js)</td>
                            <td>Dr. E. Anstead, Dr. S. Katan</td>
                        </tr>
                        <tr>
                            <th scope="row">ITP2</th>
                            <td>CM1010</td>
                            <td>Introduction to Programming II</td>
                            <td>Report (30%)</td>
                            <td>Project (70%)</td>
                            <td>JS (p5.js)</td>
                            <td>Dr. E. Anstead, Dr. S. Katan</td>
                        </tr>
                        <tr>
                            <th scope="row">CM</th>
                            <td>CM1015</td>
                            <td>Computational Mathematics</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>None</td>
                            <td>Gerardo Aquino</td>
                        </tr>
                        <tr>
                            <th scope="row">DM</th>
                            <td>CM1020</td>
                            <td>Discrete Mathematics</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>None</td>
                            <td>Dr. L. Ouarbya, Dr. A. Alfalah</td>
                        </tr>
                        <tr>
                            <th scope="row">FCS</th>
                            <td>CM1025</td>
                            <td>Fundamentals of Computer Science</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>None</td>
                            <td>Dr. Golnaz Badkobeh</td>
                        </tr>
                        <tr>
                            <th scope="row">HCW</th>
                            <td>CM1030</td>
                            <td>How Computers Work</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>None</td>
                            <td>Dr. Marco Gillies</td>
                        </tr>
                        <tr>
                            <th scope="row">ADS1</th>
                            <td>CM1035</td>
                            <td>Algorithms and Data Structures I</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>Pseudocode</td>
                            <td>Dr. Matty Hoban</td>
                        </tr>
                        <tr>
                            <th scope="row">WD</th>
                            <td>CM1040</td>
                            <td>Web Development</td>
                            <td>Group project (30%)</td>
                            <td>Project (70%)</td>
                            <td>HTML/CSS/JS</td>
                            <td>Dr. Nick Hine</td>
                        </tr>
                    </tbody>
                </table>

                {/* Module ranking */}
                <h5 className="text-center mb-5">Modules ranking</h5>
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Short</th>
                            <th scope="col">Code</th>
                            <th scope="col">Module Name</th>
                            <th scope="col">Midterm</th>
                            <th scope="col">Finals</th>
                            <th scope="col">Language(s)</th>
                            <th scope="col">Professor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">ITP1</th>
                            <td>CM1005</td>
                            <td>Introduction to Programming I</td>
                            <td>Projects (50%)</td>
                            <td>Projects (50%)</td>
                            <td>JS (p5.js)</td>
                            <td>Dr. E. Anstead, Dr. S. Katan</td>
                        </tr>
                        <tr>
                            <th scope="row">ITP2</th>
                            <td>CM1010</td>
                            <td>Introduction to Programming II</td>
                            <td>Report (30%)</td>
                            <td>Project (70%)</td>
                            <td>JS (p5.js)</td>
                            <td>Dr. E. Anstead, Dr. S. Katan</td>
                        </tr>
                        <tr>
                            <th scope="row">CM</th>
                            <td>CM1015</td>
                            <td>Computational Mathematics</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>None</td>
                            <td>Gerardo Aquino</td>
                        </tr>
                        <tr>
                            <th scope="row">DM</th>
                            <td>CM1020</td>
                            <td>Discrete Mathematics</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>None</td>
                            <td>Dr. L. Ouarbya, Dr. A. Alfalah</td>
                        </tr>
                        <tr>
                            <th scope="row">FCS</th>
                            <td>CM1025</td>
                            <td>Fundamentals of Computer Science</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>None</td>
                            <td>Dr. Golnaz Badkobeh</td>
                        </tr>
                        <tr>
                            <th scope="row">HCW</th>
                            <td>CM1030</td>
                            <td>How Computers Work</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>None</td>
                            <td>Dr. Marco Gillies</td>
                        </tr>
                        <tr>
                            <th scope="row">ADS1</th>
                            <td>CM1035</td>
                            <td>Algorithms and Data Structures I</td>
                            <td>Written (50%)</td>
                            <td>Written (50%)</td>
                            <td>Pseudocode</td>
                            <td>Dr. Matty Hoban</td>
                        </tr>
                        <tr>
                            <th scope="row">WD</th>
                            <td>CM1040</td>
                            <td>Web Development</td>
                            <td>Group project (30%)</td>
                            <td>Project (70%)</td>
                            <td>HTML/CSS/JS</td>
                            <td>Dr. Nick Hine</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Ranking;
