import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./pages/Home";
import SessionPlanner from "./pages/SessionPlanner";
import Surveys from "./pages/Surveys";
import Ranking from "./pages/Ranking";
import Resources from "./pages/Resources";

import "./App.css";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // TODO: save dark mode state to session store

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // You can apply your dark theme styles here
    };
    return (
        <Router>
            <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
                <nav className="navbar navbar-expand-lg navbar-custom">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img
                                src={process.env.PUBLIC_URL + "/seshmap-logo.png"}
                                alt="Logo"
                                className="navbar-logo"
                            />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            // data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/sessionplanner"
                                        className="nav-link"
                                    >
                                        Session Planner
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/resources" className="nav-link">
                                        Resources
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/ranking" className="nav-link">
                                        Ranking
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/surveys" className="nav-link">
                                        Surveys
                                    </NavLink>
                                </li>
                            </ul>
                            <button
                                className="btn btn-link text-white"
                                onClick={toggleDarkMode}
                            >
                                <i
                                    className={`bi ${
                                        isDarkMode ? "bi-sun" : "bi-moon"
                                    }`}
                                ></i>
                            </button>
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
