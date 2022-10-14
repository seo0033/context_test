import React, { createContext, useState } from 'react'
import Sub from './Sub'
import './dark.scss'

const DarkTheme = createContext();
export { DarkTheme };

const App = () => {
    const [dark, setDark] = useState(false);
    return (
        <div className={`App ${dark ? 'on' : ''}`}>
            <DarkTheme.Provider value={{ dark, setDark }}>
                <Sub />
            </DarkTheme.Provider>
        </div>
    )
}

export default App

