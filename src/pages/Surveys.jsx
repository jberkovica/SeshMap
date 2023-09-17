import React, { useState } from "react";
import LevelSelector from "../components/LevelSelector";
import { modules } from "../modules";
import "./Surveys.css";

function Surveys() {
    const [selectedLevel, setSelectedLevel] = useState("Level4");
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
            <div className="container pt-5">     
                <SurveyTable selectedLevel={selectedLevel} />
            </div>
        </div>
    );
}



const displayHeader = level => {
    const levelHeaders = {
        Level4: "Level 4",
        Level5: "Level 5",
        Level6: "Level 6",
    };

    return levelHeaders[level] || level;
};



const SurveyTable = ({ selectedLevel }) => {
    const selectedLevelData = modules[selectedLevel];
    const levelData = []; 
    for (const moduleKey in selectedLevelData) {
        levelData.push(selectedLevelData[moduleKey].name)        
    }    
    const [currentQuestion, setCurrentQuestion] = useState(0); 

    const questionHeaders = [
        ['Very Easy', 'Easy', 'Moderate', 'Difficult', 'Very Difficult'],
        ['10+', '8 - 10', '6 - 8', '4 - 6', '2 - 4', '0 - 2'], 
        ['Very Poor', 'Poor', 'Normal', 'Good', 'Very Good'], 
        ['Not At All', 'Hardly Sufficient', 'Just Sufficient', 'Mostly Sufficient', 'Totally Sufficient'],
        ['Nothing', 'A Little', 'A Good Amount', 'A Lot'],
        ['Very Boring', 'Boring', 'Fine', 'Interesting', 'Very Interesting']
    ];    
    const questionArray = [
        'How do you estimate the difficulty of these modules?',
        'How time consuming do you estimate these modules (hours/week)?',
        'How do you estimate the quality of these modules?',
        'Do you think the course material is sufficient to learn and pass these modules?',
        'How much did you learn?',
        'How interesting did you find these modules?'
    ];


    const handleNextQuestion = () => {
        if (currentQuestion < questionHeaders.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const isLastQuestion = currentQuestion === questionHeaders.length - 1;
    const isFirstQuestion = currentQuestion === 0;

    return (
        <div>
            <h2 className="text-center mb-5 display-3">{displayHeader(selectedLevel)}</h2>
            <h5>Question {currentQuestion + 1}/{questionHeaders.length}</h5>
            <p className= "pb-5">{questionArray[currentQuestion]}</p>
            <table className="table table-hover table-striped mb-5">
                <thead>
                    <tr>
                        <th></th>
                        {questionHeaders[currentQuestion].map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                        {levelData.map((row) => (
                            <tr key={row}>
                                <td>{row}</td>
                                {questionHeaders[currentQuestion].map((header, index) => (
                                    <td key={header}>
                                        <input
                                            type="radio"
                                            name={`${row}-${currentQuestion}`}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
            </table>
            <div className="button-container">
                {!isFirstQuestion ? (
                            <button className="btn btn-primary"  onClick={handlePreviousQuestion}>Back</button>
                        ) : (
                            <div></div> // Placeholder div to keep the space occupied. Don't delete!
                        )}
                {isLastQuestion && <input type="email" placeholder="Key in your email here" />}
                {isLastQuestion ? (
                    <button className="btn btn-primary" >Submit</button>
                ) : (
                    <button className="btn btn-primary" onClick={handleNextQuestion}>Next Question</button>
                )}
            </div>
        </div>
    );
};

export default Surveys;
