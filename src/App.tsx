import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './App.css';
import { Counter } from './Counter';

const App: React.FC = () => {
    let [count, setCount] = useState(minValue)
    let [maxValue, setMaxValue] = useState(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
          let newValue = JSON.parse(valueAsString)
          setCount(newValue)
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(count))
      }, [count])

    const incHandler = () => setCount(++count);

    const decHandler = () => setCount(--count);

    const resHandler = () => setCount(minValue);

    let setMinValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(parseInt(event.currentTarget.value))
    };

    let setMinValueButtonHandler = () => {
        setCount(count = minValue)
    };

    let setMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(parseInt(event.currentTarget.value))
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
