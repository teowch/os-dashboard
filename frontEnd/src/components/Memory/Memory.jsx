import React from "react";
import PropTypes from 'prop-types';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Memory.css';

function Memory(props) {
    const { mem } = props;
    const total = mem.total;
    const used = mem.used;
    const percentage = (used / (total / 100)).toPrecision(2);

    return (
        <div className="memory-container">
            <CircularProgressbarWithChildren strokeWidth={5} className="memory-progressbar" value={percentage}
            styles={buildStyles({
                pathColor: "#007ACC",
                trailColor: "#262335",
                strokeLinecap: "butt"
              })}
            >
                <h2>RAM Memory</h2>
                <h1>{percentage}%</h1>
                <div>{used}MB / {total}MB</div>
            </CircularProgressbarWithChildren>
        </div>
    )
}

Memory.propTypes = {
    mem: PropTypes.object
}

export default Memory;