import React, { useState } from "react";
import ClassContextComponent from "../../components/ClassContextComponent";
import FunctionContextComponent from "../../components/FunctionContextComponent";

export const ThemeContext = React.createContext('')
const UseContext = () => {
    const [darkTheme, setDarkTheme] = useState(() => {
        return true
    })
    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }
    return (
        <div>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent />
                <ClassContextComponent />
            </ThemeContext.Provider>
        </div>
    )
}

export default UseContext;