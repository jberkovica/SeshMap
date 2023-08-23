import React, { useState, useEffect } from "react";
import "./Module.css";

function Module() {
    const [moduleName, setModuleName] = useState("Default Module");

    useEffect(() => {
        // Fetch data from your functions here
    }, [moduleName]);

    return (
        <div className="module-container p-4">
            <select
                className="form-select mb-3"
                onChange={e => setModuleName(e.target.value)}
            >
                <option value="Module1">Module 1</option>
                <option value="Module2">Module 2</option>
                {/* Continue for other modules... */}
            </select>
            {/* Render your data below. Example: */}
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
    );
}

export default Module;
