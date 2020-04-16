import React from "react";

import "./CommonStyles.css";

type propsType = {
    activeCount: number
    finishedCount: number
}

const Statistic = (props: propsType) => {
    return (
        <span className="statistic">{props.finishedCount} done, {props.activeCount} left</span>
    )
};

export default Statistic;