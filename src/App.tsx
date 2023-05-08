import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { Counter } from './Counter';

const App: React.FC = () => {
    let [minValue, setMinValue] = useState(0)
    let [count, setCount] = useState(minValue)
    let [maxValue, setMaxValue] = useState(0)

    const incHandler = () => setCount(++count);

    const decHandler = () => setCount(--count);

    const resHandler = () => setCount(minValue);

    let setMinValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(parseInt(event.target.value))
    };

    let setMinValueButtonHandler = () => {
        setCount(count = minValue)
    };

    let setMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(parseInt(event.target.value))
    };

    let setMaxValueButtonHandler = () => {
        setMaxValue(maxValue)
    };


    return (
        <Counter
            count={count}
            incHandler={incHandler}
            decHandler={decHandler}
            resHandler={resHandler}
            setMinValueHandler={setMinValueHandler}
            setMinValueButtonHandler={setMinValueButtonHandler}
            setMaxValueHandler={setMaxValueHandler}
            setMaxValueButtonHandler={setMaxValueButtonHandler}
            maxValue={maxValue}
            minValue={minValue}
        />
    )
}

export default App;
