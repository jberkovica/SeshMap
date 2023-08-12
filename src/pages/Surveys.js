import React, { useState } from "react";
import LevelSelector from "./../components/LevelSelector";

function Surveys() {
    const [selectedLevel, setSelectedLevel] = useState("");

    const handleLevelChange = level => {
        setSelectedLevel(level);
    };

    return (
        <div>
            <div className="bg-secondary bg-opacity-25 p-5 rounded-lg">
                <div className="row">
                    <div className="col-md-6">
                        <p className="lead">Please select Level</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Surveys;
