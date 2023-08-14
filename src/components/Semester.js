import React from "react";

const Semester = () => {
    return (
        <div>
            <ModuleSelection />
        </div>
    );
};

const ModuleSelection = () => {
    return (
        <div className="card">
            <div className="col">
                <div className="row">Easy</div>
                <div className="row">4-6</div>
                <div className="row">Good</div>
                <div className="row">Some</div>
                <div className="row">Interesting</div>
            </div>
        </div>
    );
};

export default Semester;
