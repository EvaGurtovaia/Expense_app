import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = () => {
    return (
        <div className="chart">
            {props.data.map((data) => (
                <ChartBar
                value={data.value}
                maxValue={null}
                />
            ))}
        </div>
    );
};

export default Chart;
