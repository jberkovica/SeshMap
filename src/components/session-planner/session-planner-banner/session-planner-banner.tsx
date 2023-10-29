export function SessionPlannerBanner() {
    return (
        <div
            className="bg-neutral-200 text-black dark:bg-neutral-600 dark:text-white"
            data-testid="SessionPlannerBanner"
        >
            <div className="container flex justify-between py-10">
                <header className="">
                    <h1 className="mb-6 text-3xl font-medium lg:text-4xl">
                        Tips on how to plan your semester
                    </h1>
                    <ul className="list-inside list-disc [&>*]:mb-4 [&>*]:mt-4">
                        <li>
                            Have a look through the statistics and data
                            collected from previous students.
                        </li>
                        <li>
                            Consider the time constraints, level of difficulty
                            and module quality before selecting a combination
                            for your next semester.
                        </li>
                        <li>
                            Remember to also to search and ask questions on the
                            Slack channels related to each module!
                        </li>
                        <li>
                            Keep in mind progressional modules, i.e., the core
                            modules you have to complete and pass in order to
                            progress to next Level.
                        </li>
                        <li>
                            You have a minimum of 3 years to a maximum of 6
                            years to complete the degree.
                        </li>
                        <li>
                            You are permitted to take at minimum 2 modules per
                            session and maximum 4 modules, excluding re-sits and
                            RPL.
                        </li>
                        <li>
                            For further information visit the program regulation
                            link:{' '}
                            <a
                                className="text-blue-600 underline"
                                href="https://www.london.ac.uk/sites/default/files/regulations/progegs-bsc-computer-science-2023-24.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Regulations 2023-2024
                            </a>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    );
}
