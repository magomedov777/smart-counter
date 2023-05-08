import React from 'react';
import s from './counter.module.css'

type ButtonPanelPropsType = {
  count: number
  maxValue: number
  minValue: number
  incHandler: () => void
  decHandler: () => void
  resHandler: () => void

}

export const ButtonPanel = (props: ButtonPanelPropsType): JSX.Element => {
  return (
    <div className={s.buttonPanel}>
      <button className={s.inc} onClick={props.incHandler} disabled={props.count === props.maxValue}>increment</button>
      <button className={s.res} onClick={props.resHandler} disabled={props.count === props.minValue}>reset</button>
      <button className={s.dec} onClick={props.decHandler} disabled={props.count === props.minValue}>decrement</button>
    </div>
  )
}
