'use client';
import { useState, useEffect } from 'react';
import './session-planner.css';
import { Semester } from '@/components/semester';

function SessionPlanner() {
    const initialSemesters = JSON.parse(
        sessionStorage.getItem('semesters') || '[{}]' // start with 1 semester
    );
    const [semesters, setSemesters] = useState(initialSemesters);

    useEffect(() => {
        sessionStorage.setItem('semesters', JSON.stringify(semesters));
    }, [semesters]);

    const onAddButton = () => {
        setSemesters([...semesters, {}]); // add a new semester object to the state
    };

    const onRemoveButton = (semesterIndex: number) => {
        const updatedSemesters = [...semesters];
        updatedSemesters.splice(semesterIndex, 1);
        setSemesters(updatedSemesters);

        // Remove related items from sessionStorage
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            if (key && key.startsWith(`Semester${semesterIndex}-`)) {
                sessionStorage.removeItem(key);
                i--; // Adjust index because the length of sessionStorage decreased
            }
        }
    };

    return (
        <div>
            <div className="bg-secondary bg-opacity-25 p-5 rounded-lg">
                <div className="row">
                    <div className="col-4">
                        <h5 className="display-5 mb-5">
                            Tips on how to plan your semester
                        </h5>
                    </div>
                    <div className="col-8">
                        <ul>
                            <li className="my-3">
                                Have a look through the statistics and data
                                collected from previous students.
                            </li>
                            <li className="my-3">
                                Consider the time constraints, level of
                                difficulty and module quality before selecting a
                                combination for your next semester.
                            </li>
                            <li className="my-3">
                                Remember to also to search and ask questions on
                                the Slack channels related to each module!
                            </li>
                            <li className="my-3">
                                Keep in mind progressional modules, i.e., the
                                core modules you have to complete and pass in
                                order to progress to next Level.
                            </li>
                            <li className="my-3">
                                You have a minimum of 3 years to a maximum of 6
                                years to complete the degree.
                            </li>
                            <li className="my-3">
                                You are permitted to take at minimum 2 modules
                                per session and maximum 4 modules, excluding
                                re-sits and RPL.
                            </li>
                            <li className="my-3">
                                For further information visit the program
                                regulation link:{' '}
                                <a href="https://www.london.ac.uk/sites/default/files/regulations/progegs-bsc-computer-science-2023-24.pdf">
                                    Regulations 2023-2024
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                {semesters.map((semester: any, index: number) => (
                    <div key={index} className="position-relative">
                        <i
                            className="bi bi-x-circle fs-4 text-secondary position-absolute top-0 end-0"
                            onClick={() => onRemoveButton(index)}
                        ></i>
                        <Semester id={index} />
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center align-items-center mt-5">
                <i
                    className="bi bi-plus-circle fs-1 text-primary"
                    onClick={onAddButton}
                ></i>
            </div>
        </div>
    );
}

export default SessionPlanner;
