import React from "react";
import "./Semester.css";
import Module from "./Module";
// import SemesterSummary from "./SemesterSummary";

function Semester({ id }) {
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
        <div className="mb-5">
            <div className="row">
                <div className="col-12">
                    <h4 className="mb-5 mt-5 text-start">Semester {id + 1}</h4>
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
                                        <Module id={`Semester${id}-Module0`} />
                                    </div>
                                    <div className="col position-relative">
                                        <Module id={`Semester${id}-Module1`} />
                                    </div>
                                    <div className="col position-relative">
                                        <Module id={`Semester${id}-Module2`} />
                                    </div>
                                    <div className="col position-relative">
                                        <Module id={`Semester${id}-Module3`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TODO: implement Summary */}
                {/* <h4 className="mb-5 mt-5 text-start">Summary</h4>
                <SemesterSummary /> */}
            </div>
        </div>
    );
}

export default Semester;
