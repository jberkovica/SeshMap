import React, { useState } from "react";
import "./QuestionsCarousel.css";

// TODO: add more questions
const faq = [
    {
        question: "What is Seshmap?",
        answer: "SeshMap is an intuitive degree planning application designed by students for students. ",
    },
    {
        question: "How can SeshMap help me?",
        answer: "SeshMap allows you to select the combination of modules and gain insight on the time constraints and difficulty of the module.",
    },
    {
        question: "How does SeshMap work?",
        answer: "Click on the Session Planner to get started and enter your tentative modules.",
    },
    {
        question: "What is Seshmap?",
        answer: "SeshMap is an intuitive degree planning application designed by students for students. ",
    },
    {
        question: "How can SeshMap help me?",
        answer: "SeshMap allows you to select the combination of modules and gain insight on the time constraints and difficulty of the module.",
    },
    {
        question: "How does SeshMap work?",
        answer: "Click on the Session Planner to get started and enter your tentative modules.",
    },
];

function QuestionsCarousel() {
    const [visibleFaq, setVisibleFaq] = useState(faq.slice(0, 3));
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = () => {
        // check if there is available questions after selected
        const newIndex =
            faq.indexOf(visibleFaq[2]) < faq.length - 1 // last item
                ? currentIndex + 1
                : currentIndex;
        setCurrentIndex(newIndex);
        setVisibleFaq(faq.slice(newIndex, 3 + newIndex));
    };

    const onPrev = () => {
        // check if there is available questions before selected
        const newIndex =
            faq.indexOf(visibleFaq[0]) > 0 ? currentIndex - 1 : currentIndex + 0;
        setCurrentIndex(newIndex);
        setVisibleFaq(faq.slice(newIndex, 3 + newIndex));
    };
    return (
        <div className="container">
            <div className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row questions-block mt-3">
                            {visibleFaq.map(function (q, index) {
                                return (
                                    <div
                                        className="col bg-secondary bg-opacity-25 m-3 p-5 questions-card"
                                        key={index}
                                    >
                                        <h5 className="mb-3">{q.question}</h5>
                                        <p>{q.answer}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                    onClick={onPrev}
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                    onClick={onNext}
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default QuestionsCarousel;
