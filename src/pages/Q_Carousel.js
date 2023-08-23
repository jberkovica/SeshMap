import "./Q_Carousel.css";
import Carousel from 'react-bootstrap/Carousel';

function Q_Carousel() 
{
    return (
    <Carousel>
        <Carousel.Item interval={null}>
                <div>
                    <div id = "Slide-1">
                        <div className = "flex-container">
                            <div className = "Box">
                                <div className = "BoxHeader">
                                    What is Seshmap?
                                </div>
                                <div className = "BoxContent">
                                    Seshmap is an intuitive session planning utility
                                    designed by students for students, specifically made
                                    for the online UoL BSc Computer Science degree.
                                </div>
                            </div>
                            <div className = "Box">
                                <div className = "BoxHeader">
                                    How can Seshmap help me?
                                </div>
                                <div className = "BoxContent">
                                    SeshMap provides a dynamic utility based on course information and
                                    student feedback from "Going Next Level", that allows you to make comparisons
                                    that can help you plan your upcoming session.
                                </div>
                            </div>
                            <div className = "Box">
                                <div className = "BoxHeader">
                                    How does it work?
                                </div>
                                <div className = "BoxContent">
                                    Find the courses that you are interested in from the Resources tab,
                                    make a note of your tentative modules then proceed to the Ranking tab
                                    and plan your upcoming semesters based on the data.
                                </div>
                            </div>
                            <div className = "Box">
                                <div className = "BoxHeader">
                                    Sample FAQ
                                </div>
                                <div className = "BoxContent">
                                    ANSWER
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Carousel.Item>

        <Carousel.Item>
                <div>
                    <div id = "Slide-1">
                        <div className = "flex-container">
                            <div className = "Box">
                                <div className = "BoxHeader">
                                    Sample FAQ
                                </div>
                                <div className = "BoxContent">
                                    ANSWER
                                </div>
                            </div>
                            <div className = "Box">
                                <div className = "BoxHeader">
                                    Sample FAQ
                                </div>
                                <div className = "BoxContent">
                                    ANSWER
                                </div>
                            </div>
                            <div className = "Box">
                                <div className = "BoxHeader">
                                    Sample FAQ
                                </div>
                                <div className = "BoxContent">
                                    ANSWER
                                </div>
                            </div>
                            <div className = "Box">
                                <div className = "BoxHeader">
                                    Sample FAQ
                                </div>
                                <div className = "BoxContent">
                                    ANSWER
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Carousel.Item>
    </Carousel>
    );
}

export default Q_Carousel;