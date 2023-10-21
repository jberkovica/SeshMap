'use client';

import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export function DarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const htmlElObserver = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        });

        htmlElObserver.observe(document.documentElement, {
            attributeFilter: ['class'],
        });

        return () => htmlElObserver.disconnect();
    }, []);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button
            data-testid="DarkModeButton"
            className="p-1 text-white"
            onClick={toggleDarkMode}
        >
            {isDarkMode ? (
                <BsSun data-testid="sun-icon" />
            ) : (
                <BsMoon data-testid="moon-icon" />
            )}
        </button>
    );
}
