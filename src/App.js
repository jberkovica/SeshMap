import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SessionPlanner from "./pages/SessionPlanner";
import Surveys from "./pages/Surveys";
import Ranking from "./pages/Ranking";
import Resources from "./pages/Resources";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-custom">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img
                                src={process.env.PUBLIC_URL + "/seshmap-logo.png"}
                                alt="Logo"
                                className="navbar-logo"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            // data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/sessionplanner">
                                        Session Planner
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/resources">
                                        Resources
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/ranking">
                                        Ranking
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/surveys">
                                        Surveys
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* TODO: add component for invalid url -> Page not found or 404 */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sessionplanner" element={<SessionPlanner />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/ranking" element={<Ranking />} />
                    <Route path="/surveys" element={<Surveys />} />
                </Routes>

                <div className="footer">
                    <small>All rights reserved @UoL 2023</small>
                </div>
            </div>
        </Router>
    );
}

export default App;
