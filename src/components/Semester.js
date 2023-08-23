import React from "react";
import "./Semester.css";
import Module from "./Module";

function Semester() {
    const headers = [
        "Difficulty",
        "Time",
        "Quality",
        "Self-Study",
        "Learning",
        "Interest",
        "Midterm",
        "Final",
    ];

    return (
        < div className="mb-5">
            <div className="row">
                <div className="col-10">
                    <h4 className="semester-title mb-5 mt-5 text-start">
                        Semester 1
                    </h4>
                    <div className="semester-container p-4">
                        <div className="row">
                            <div className="col-2">
                                {headers.map(header => (
                                    <p key={header} className="mb-3 text-white">
                                        {header}
                                    </p>
                                ))}
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col position-relative">
                                        <Module />
                                    </div>
                                    <div className="col position-relative">
                                        <Module />
                                    </div>
                                    <div className="col position-relative">
                                        <Module />
                                    </div>
                                    <div className="col position-relative">
                                        <Module />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <h4 className="semester-title mb-5 mt-5 text-start">Summary</h4>
                    <SemesterSummary />
                </div>
            </div>
        </div>
    );
}

function SemesterSummary() {
    return (
        <div className="summary-container">
            <div className="module-container p-3">
                <div className="p-3">
                    <p className="module-data mb-3">Easy</p>
                    <p className="module-data mb-3">4-6</p>
                    <p className="module-data mb-3">Good</p>
                    <p className="module-data mb-3">Some</p>
                    <p className="module-data mb-3">Good amount</p>
                    <p className="module-data mb-3">Interesting</p>
                    <p className="module-data mb-3">Projects (50%)</p>
                    <p className="module-data mb-3">Projects (50%)</p>
                </div>
            </div>
        </div>
    );
}

export default Semester;
