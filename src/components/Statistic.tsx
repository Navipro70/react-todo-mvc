import React, { FC } from 'react'

import './CommonStyles.css'

type propsType = {
  activeCount: number
  finishedCount: number
}

const Statistic: FC<propsType> = (props) => {
  return (
    <span className="statistic">
      {props.finishedCount} done, {props.activeCount} left
    </span>
  )
}

export default Statistic
