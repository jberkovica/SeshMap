import React from "react";
import {modules} from "../modules";

const LevelSelector = ({ selectedLevel, onSelectLevel }) => {
    const handleLevelChange = event => {
        const selectedLevel = event.target.value;
        onSelectLevel(selectedLevel);
    };

    const levels = Object.keys(modules);

    return (
        <div>
            <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleLevelChange}
            >
                <option defaultValue value="">
                    Select Level
                </option>
                {levels.map(element => (
                    <option key={element} value={element}>
                        {element}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LevelSelector;
