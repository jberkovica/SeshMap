import React from "react";
import QuestionsCarousel from "../components/QuestionsCarousel.jsx";
import AcknowledgementsCarousel from "../components/Acknowledgements.jsx";
import "./Home.css";

/** currentWeek code is taken from Denis Bakunovitch's "what week is it anyway"
 web application.*/
function currentWeek() {
    const dateFrom = new Date("2023-10-09"); // last semester start date

    const dateTo = new Date();
    let w = Math.ceil((dateTo - dateFrom) / (1000 * 60 * 60 * 24 * 7));

    if (w < 1 || w > 22) {
        w = 0;
    }

    return w;
}

function Home() {
    const Week = currentWeek();

    return (
        <div>
            <div className="bg-secondary bg-opacity-25 p-5 rounded-lg text-left">
                <div className="Main">
                    <div>
                        <h1>Welcome to SeshMap!</h1>
                        <br></br>
                        <p>
                            SeshMap is your one-stop resource and planning hub, for
                            all things<br></br>
                            related to the online University of London BSc. Computer
                            Science degree!
                        </p>
                        <p>
                            All information related to modules can be found across
                            these pages; you may also browse <br></br>
                            through course-specific data to make informed decisions
                            about your next session.
                        </p>
                    </div>
                    <div className="Week">
                        <h4 className="display-6">week</h4>
                        {Week}
                    </div>
                </div>
            </div>

            <QuestionsCarousel />
            <AcknowledgementsCarousel />
        </div>
    );
}

export default Home;
