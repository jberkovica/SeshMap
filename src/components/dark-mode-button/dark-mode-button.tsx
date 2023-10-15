'use client';

import { useState } from 'react';

export function DarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button className="btn btn-link text-white" onClick={toggleDarkMode}>
            <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'}`}></i>
        </button>
    );
}
