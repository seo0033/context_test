import React, { useContext } from 'react'
import { DarkTheme } from './App';

const TheDeepSub = () => {
    const { dark, setDark } = useContext(DarkTheme);
    console.log(dark)

    return (
        <div className='dark_btn'>
            <label htmlFor='btn' className={`Btn ${dark ? 'on' : ''}`}>
                Dark
            </label>
            <button id='btn' onClick={
                () => setDark(!dark)
            }>
                Dark Mode</button>
        </div >
    )
}

export default TheDeepSub