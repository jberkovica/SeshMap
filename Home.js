import React from "react";
import Q_Carousel from "./Q_Carousel.js"
import "./Home.css"
import A_Carousel from"./A_Carousel.js"


// currentWeek code is taken from Denis Bakunovitch's "what week is it anyway"
// web application.

function currentWeek() {
    //const dateFrom = new Date('2020-04-20');
    //const dateFrom = new Date('2020-10-12');
    //const dateFrom = new Date('2021-04-12');
    //const dateFrom = new Date('2021-10-11');
    //const dateFrom = new Date('2022-04-04');
    //const dateFrom = new Date('2022-10-10');
    const dateFrom = new Date('2023-04-17');
    
    
    const dateTo = new Date();
    let w = Math.ceil((dateTo - dateFrom)/(1000*60*60*24*7));
    
    if(w < 1 || w > 22) { w = 0; }

    return w;
    
};


function Home() {



    const Week = currentWeek();

    return (
        <>
        <div>
            <div className="bg-secondary bg-opacity-25 p-5 rounded-lg text-left">
                <div className="Main">
                    <div>
                        <h1>Welcome to SeshMap!</h1>
                        <p>
                            SeshMap is your one-stop resource and planning hub, for all things<br></br>
                            related to the online University of London BSc. Computer Science degree!
                        </p>
                        <p>
                            All information related to modules can be found across these pages; you may also browse <br></br>
                            through course-specific data to make informed decisions about your next session.
                        </p>
                    </div>
                    <div className = "Week">
                        <h4 className = "display-6">
                            week
                        </h4>
                        {Week}
                    </div>
                </div>
            </div>
            <Q_Carousel />
            <div className = "bg-secondary bg-opacity-25">
            <div className = "Title">
                <h3>Acknowledgements</h3>
            </div>
            <A_Carousel />
            </div>
        </div>
        </>
    );
}

export default Home;
