import React from 'react';
import s from './counter.module.css';

type CounterScreenPropsType = {
  count: number
  maxValue: number
}

export const CounterScreen = (props: CounterScreenPropsType): JSX.Element => {
  return (
    <div>
      <h1 className={s.count}>
        <span className={props.count === props.maxValue ? s.red : ''}>{props.count}</span>
      </h1>
    </div>
  )
}
