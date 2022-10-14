import React, { useContext, useState } from 'react';
import { createContext } from 'react';

//🚩context api : context는 컴포넌트안에서 전역적으로 데이터를 공유하도록 나온 개념
// 1. createContext로 Context를 만든다.
// 2. 이름.Provider로 하위구조를 감싼다.
// 3. value 값을 지정
// 4. useContext(이름)으로 불러온다.

const MakeGenius = createContext();
console.log(MakeGenius)

const TheDeepSub = () => {
    const { state, setState } = useContext(MakeGenius)
    // console.log(MG)
    return <>
        {state}짱짱
        <button onClick={() => setState('천재!')}>천재로만들기</button>
    </>
}

const DeepSub = () => {
    return <TheDeepSub />
}

const Sub = () => {
    return <DeepSub />
}

const App = () => {
    const [state, setState] = useState("바보")
    return (
        <>
            <MakeGenius.Provider value={{ state, setState }}>
                <Sub />
            </MakeGenius.Provider>
        </>

    )
}

export default App

