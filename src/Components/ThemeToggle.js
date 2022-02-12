//ThemeToggle.js
import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <div className="transition duration-500 ease-in-out rounded-full p-2">
                {theme === 'dark' ? (
                    <FaSun
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                ) : (
                        <FaMoon
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                        />
                    )}
            </div>
        </div>
    );
};

export default Toggle;