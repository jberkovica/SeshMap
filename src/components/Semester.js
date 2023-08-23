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
                <div className="col-12">
                    <h4 className="mb-5 mt-5 text-start">
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
                <div>
                    {/* <h4 className="mb-5 mt-5 text-start">Summary</h4> */}
                    {/* TODO: */}
                </div>
            </div>
        </div>
    );
}

export default Semester;
