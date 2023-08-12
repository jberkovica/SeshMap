import React from "react";

function SessionPlanner() {
    return (
        // TODO: implement grid
        <div>
            <div className="bg-secondary bg-opacity-25 p-5 rounded-lg">
                <h3 className="display-5 mb-5">Tips on how to plan your semester</h3>
                <div>
                    <ul>
                        <li className="my-3">
                            Have a look through the statistics and data collected
                            from previous students.
                        </li>
                        <li className="my-3">
                            Consider the time constraints, level of difficulty and
                            module quality before selecting a combination for your
                            next semester.
                        </li>
                        <li className="my-3">
                            Remember to also to search and ask questions on the Slack
                            channels related to each module!
                        </li>
                        <li className="my-3">
                            Keep in mind progressional modules, i.e., the core
                            modules you have to complete and pass in order to
                            progress to next Level.
                        </li>
                        <li className="my-3">
                            You have a minimum of 3 years to a maximum of 6 years to
                            complete the degree.
                        </li>
                        <li className="my-3">
                            You are permitted to take at minimum 2 modules per
                            session and maximum 4 modules, excluding re-sits and RPL.
                        </li>
                        <li className="my-3">
                            For further information visit the program regulation
                            link:{" "}
                            <a href="https://www.london.ac.uk/sites/default/files/regulations/progegs-bsc-computer-science-2023-24.pdf">
                                Regulations 2023-2024
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <i className="bi bi-plus-circle fs-3 text-primary"></i>
            </div>
        </div>
    );
}

export default SessionPlanner;
