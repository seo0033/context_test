import React, { useState } from 'react'

const TheDeepSub = ({ state03, setState03 }) => {
    return (
        <>
            {state03}  바보 멍충이
            <button onClick={()=>setState03('천재')}>천재로 만들기</button>
        </>
    )
}

const DeepSub = ({ state02, setState02 }) => {
    return (
        <>
            <TheDeepSub state03={state02} setState03={setState02} />
        </>
    )
}

const Sub = ({ state, setState }) => {
    return (
        <>
            {/* {state} */}
            < DeepSub state02={state} setState02={setState} />
        </>
    )

}

const App = () => {
    const [state, setState] = useState("서영")
    return (
        <>
            <Sub state={state} setState={setState} />
        </>

    )
}

export default App

// prop drilling