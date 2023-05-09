import React, { ChangeEvent } from 'react';
import { CounterScreen } from './CounterScreen';
import { ButtonPanel } from './ButtonPanel';
import { CounterSettings } from './CounterSettings';
import s from './counter.module.css';

type CounterPropsType = {
    count: number
    maxValue: number
    minValue: number
    incHandler: () => void
    decHandler: () => void
    resHandler: () => void
    setMinValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    setMinValueButtonHandler: () => void
    setMaxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    setMaxValueButtonHandler: () => void
}

export const Counter = (props: CounterPropsType): JSX.Element => {
    return (
        <div className={s.counterBody}>
            <div className={s.mainPanel}>
                <CounterScreen
                    count={props.count}
                    maxValue={props.maxValue}
                />
                <ButtonPanel
                    incHandler={props.incHandler}
                    decHandler={props.decHandler}
                    resHandler={props.resHandler}
                    count={props.count}
                    maxValue={props.maxValue}
                />
            </div>

            <div className={s.counterSettingsPanel}>
                <CounterSettings
                    setMinValueHandler={props.setMinValueHandler}
                    setMaxValueHandler={props.setMaxValueHandler}
                    setMaxValueButtonHandler={props.setMaxValueButtonHandler}
                    setMinValueButtonHandler={props.setMinValueButtonHandler}
                />
            </div>
        </div>
    )
}
