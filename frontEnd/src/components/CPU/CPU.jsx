import React from "react";
import PropTypes from 'prop-types';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CPU.css';

function CPU(props) {
    const { cpu } = props;
    const percentage = parseInt(cpu.used);

    return (
        <div className="cpu-container">
        <CircularProgressbarWithChildren strokeWidth={5} className="cpu-progressbar" value={percentage}
        styles={buildStyles({
            pathColor: "#007ACC",
            trailColor: "#262335",
            strokeLinecap: "butt"
          })}
        >
            <h2>CPU</h2>
            <h1>{percentage}%</h1>
            <div>Cores available: {cpu.cores}</div>
        </CircularProgressbarWithChildren>
    </div>
    )
}

CPU.propTypes = {
    cpu: PropTypes.object
}

export default CPU;
