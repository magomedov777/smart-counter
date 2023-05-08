import React, { ChangeEvent } from 'react';
import s from './counter.module.css';

type CounterSettingsPropsType = {
    setMinValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    setMaxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    setMinValueButtonHandler: () => void
    setMaxValueButtonHandler: () => void
}

export const CounterSettings = (props: CounterSettingsPropsType): JSX.Element => {
    return (
        <div>
            <input
                className={s.inputMinValue}
                onChange={props.setMinValueHandler}
                placeholder={'Enter min value'}
                />
            <button
                className={s.minValue}
                onClick={props.setMinValueButtonHandler}>Min Value
            </button>
            <input
                className={s.inputMaxValue}
                onChange={props.setMaxValueHandler} 
                placeholder={'Enter max value'}
                />
            <button
                className={s.maxValue}
                onClick={props.setMaxValueButtonHandler}>Max Value
            </button>
        </div>
    )
}
