import React, { useState } from "react";
import LevelSelector from "./../components/LevelSelector";
import { RadarChart}  from "../components/RadarChart";
import { BarChart} from "../components/BarChart";
import { modules } from "../modules";
import { useTable, useSortBy } from 'react-table';
import {
    // getModuleDifficultyAverage,
    // getModuleTimeAverage,
    // getModuleQualityAverage,
    // getModuleSelfStudyAverage,
    // getModuleLearningAverage,
    // getModuleInterestAverage,
    getModuleDifficultyAverageNormalized,
    getModuleTimeAverageNormalized,
    getModuleQualityAverageNormalized,
    getModuleSelfStudyAverageNormalized,
    getModuleLearningAverageNormalized,
    getModuleInterestAverageNormalized
} from "../helpers";


// Main Function that Calls on all Subsequent Functions
function Ranking() {
    const [selectedLevel, setSelectedLevel] = useState("Level4");
    const handleLevelChange = level => {
        setSelectedLevel(level);
    };

    // TODO: save last selection to session store?
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
            <LevelData selectedLevel={selectedLevel} />
        </div>
    );
}


// Header to be used in main component
const displayHeader = level => {
    const levelHeaders = {
        Level4: "LEVEL 4",
        Level5: "LEVEL 5",
        Level6: "LEVEL 6",
    };

    return levelHeaders[level] || level;
};
// Shared color array to be used in bar and radar charts
const colorArray = ['rgba(234, 85, 69)','rgba(244, 106, 155)','rgba(239, 155, 32)','rgba(237, 191, 51)',
                    'rgba(187, 207, 50)','rgba(135, 188, 69)','rgba(39, 174, 239)','rgba(179, 61, 198)', 
                    'rgba(155, 25, 245)','rgba(220, 10, 180)','rgba(230, 0, 73)','rgba(253, 127, 111)',
                    'rgba(230, 216, 0)','rgba(0, 191, 160)']



const TableWithModuleData = ({ selectedLevelData }) => {
    const tableRows = [];
    for (const moduleKey in selectedLevelData) {
        const module = selectedLevelData[moduleKey];
        tableRows.push(
            <tr key={moduleKey}>
                <th scope="row">{module.id}</th>
                <td>{module.code}</td>
                <td>{module.name}</td>
                <td>{module.midterm}</td>
                <td>{module.final}</td>
                <td>{module.languages}</td>
                <td>{module.professor}</td>
            </tr>
        );
    }
    return tableRows;
};


const TableWithModuleRanking = ({ selectedLevelData }) => {  

    // This creates the data that will be used to calculate ranking
    const moduledetails = React.useMemo(() => {
        const details = [];    
        // Creating the dictionary of all modules for future ranking purposes
        for (const moduleKey in selectedLevelData) {
            const module = selectedLevelData[moduleKey];
            const ModuleDifficultyAverage = parseFloat(getModuleDifficultyAverageNormalized(module.name))
            const ModuleTimeAverage = parseFloat(getModuleTimeAverageNormalized(module.name))
            const ModuleQualityAverage = parseFloat(getModuleQualityAverageNormalized(module.name))
            const ModuleSelfStudyAverage = parseFloat(getModuleSelfStudyAverageNormalized(module.name))
            const ModuleLearningAverage = parseFloat(getModuleLearningAverageNormalized(module.name))
            const ModuleInterestAverage = parseFloat(getModuleInterestAverageNormalized(module.name))
            const ModuleCombinedAverage = (ModuleDifficultyAverage+ModuleTimeAverage+ModuleQualityAverage+ModuleSelfStudyAverage+ModuleInterestAverage)/5
            // Create an object to be pushed into moduledetails
            const newModule = {
                name: module.name,
                values: [ModuleDifficultyAverage, ModuleTimeAverage, ModuleQualityAverage, ModuleSelfStudyAverage, ModuleLearningAverage, ModuleInterestAverage, ModuleCombinedAverage]
            }
            details.push(newModule);            
        }    
        return details;
    }, [selectedLevelData]);
    
    
    // Create a variable that sees how many metrics needed to be ranked
    // Calculates the no. based on the first module and assume others are the same
    const valueCount = moduledetails[0].values.length;   
    const metrics = ['difficulty', 'time', 'quality', 'selfstudy', 'learning', 'interest', 'total']
    for (let valueIndex = 0; valueIndex < valueCount; valueIndex++) {
        // Sort modules based on the value at the current index
        moduledetails.sort((a, b) => b.values[valueIndex] - a.values[valueIndex]);    
        // Assign rankings for the current value index
        moduledetails.forEach((module, index) => {
            module[`${metrics[valueIndex]}rank`] = index + 1;
        });
    }    

    // Create the table itself
    const columns = React.useMemo(
        () => [
            {
                Header: 'Module Name',
                accessor: 'name' // string-based value accessors!
            },
            {
                Header: 'Difficulty',
                accessor: 'difficultyrank'
            },
            {
                Header: 'Time',
                accessor: 'timerank'
            },
            {
                Header: 'Quality',
                accessor: 'qualityrank'
            },
            {
                Header: 'Self-Study',
                accessor: 'selfstudyrank'
            },
            {
                Header: 'Learning',
                accessor: 'learningrank'
            },
            {
                Header: 'Interest',
                accessor: 'interestrank'
            },
            {
                Header: 'Total',
                accessor: 'totalrank'
            },
        ],
        []
    );
    const data = React.useMemo(() => moduledetails, [moduledetails]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data
        },
        useSortBy // Use the useSortBy hook here
    );
    return (
        <table {...getTableProps()} className="table table-hover table-striped mb-5">
            {/* The header that can be clicked to do sorting */}
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} scope="row">
                                {column.render('Header')}
                                {/* Add a sort direction indicator */}
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' \u25BC'  //downward pointing
                                            : ' \u25B3'  //upward pointing
                                        : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            {/* Contents of the table that changes based on sorting type*/}
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell,index) => (
                                <td {...cell.getCellProps()} style={index === 0 ? { fontWeight: 'bold' } : {}}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};


// Takes in one module and displays all information about it on a radar chart
const RadarCharts = ({ module,index }) => {
    const dataArray = [parseFloat(getModuleDifficultyAverageNormalized(module.name)),
                        parseFloat(getModuleTimeAverageNormalized(module.name)), 
                        parseFloat(getModuleQualityAverageNormalized(module.name)),
                        parseFloat(getModuleSelfStudyAverageNormalized(module.name)),
                        parseFloat(getModuleLearningAverageNormalized(module.name)),
                        parseFloat(getModuleInterestAverageNormalized(module.name))];
    const labels = ['Difficulty', 'Time', 'Quality', 'Self Study', 'Learning', 'Interest'];
    return <RadarChart dataArray={dataArray} labels={labels} title ={module.name} color = {colorArray[index]}/>;
}


// Takes in ALL modules, do calculations, and displays all information about it on a bar chart
const BarChartsDisplay = ({selectedLevelData}) => {
    const moduleNameArray = []
    const moduleIDArray = []
    for (const moduleKey in selectedLevelData){
        moduleNameArray.push(selectedLevelData[moduleKey].name)
        moduleIDArray.push(selectedLevelData[moduleKey].id)
    }  
    const labels = ['Difficulty', 'Time', 'Quality', 'Self Study', 'Learning', 'Interest'];
    const metricArray = []
    for (var i = 0; i < labels.length; i++){
        metricArray.push([])
    }

    moduleNameArray.forEach((module) => {
        metricArray[0].push(parseFloat(getModuleDifficultyAverageNormalized(module)))
        metricArray[1].push(parseFloat(getModuleTimeAverageNormalized(module)))
        metricArray[2].push(parseFloat(getModuleQualityAverageNormalized(module)))
        metricArray[3].push(parseFloat(getModuleSelfStudyAverageNormalized(module)))
        metricArray[4].push(parseFloat(getModuleLearningAverageNormalized(module)))
        metricArray[5].push(parseFloat(getModuleInterestAverageNormalized(module)))
    });
    const barChartArray = []
    for (var i = 0; i < metricArray.length; i++){
        barChartArray.push(<div key = {labels[i]} className="col-4"> <BarChart dataArray={metricArray[i]} labels={moduleIDArray} title ={labels[i]} color = {colorArray}/> </div>) 
    } 
    return barChartArray
}


const LevelData = ({ selectedLevel }) => {
    // Accessing the name and code of the selected module
    const selectedLevelData = modules[selectedLevel];    
    const moduleArray = []
    for (const moduleKey in selectedLevelData){
        moduleArray.push(selectedLevelData[moduleKey])
    }   

    // The part that calls on and renders all of the table and graph components on page
    if (selectedLevelData) {
        return (
            <div className="container pt-5">
                <h2 className="text-center mb-5 display-3">{displayHeader(selectedLevel)}</h2>
                {/* Module comparison */}
                <h5 className="text-center mb-5 display-5">Modules comparison</h5>
                <table className="table table-hover table-striped mb-5">
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
                        <TableWithModuleData selectedLevelData={selectedLevelData} />
                    </tbody>
                </table>

                {/* Module ranking */}
                <h5 className="text-center mb-5 display-5">Modules ranking</h5>   
                <TableWithModuleRanking selectedLevelData={selectedLevelData} />
     
       
                {/* Module Charts */}
                <h5 className="text-center mb-5 display-5 pt-5">Module Features</h5>
                <div className="row mb-8">
                    {moduleArray.map((module, index) => (
                        <div key={index} className="col-md-3">
                            <RadarCharts module={module} index = {index}/>
                        </div>
                    ))}
                </div>
                <h5 className="text-center mb-5 display-5 pt-5">Metrics Comparison</h5>
                <div className="row mb-4 pb-5">
                    <BarChartsDisplay selectedLevelData={selectedLevelData} />
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Ranking;
