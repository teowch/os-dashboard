import React from "react";
import PropTypes from 'prop-types';

import './Process.css';

function Process(props) {

    const { process } = props;

    return (
        <div className="process">
          <div className="process__pid">{process.pid}</div>
            <div className="process__command">{process.command}</div>
            <div className="process__user">{process.user}</div>
            <div className="process__cpu">
              <div className="process__progress-value">{process.cpu}</div>
              <div className="process__progress">
                <div
                  className="process__progress-bar"
                  style={{ width: `${parseFloat(process.cpu)}%` }}
                ></div>
              </div>
            </div>
            <div className="process__mem">
              <div className="process__progress-value">{process.mem}</div>
              <div className="process__progress">
                <div
                  className="process__progress-bar"
                  style={{ width: `${parseFloat(process.mem)}%` }}
                ></div>
              </div>
            </div>
          </div>
    )
}

Process.propTypes = {
    process: PropTypes.object
  };

export default Process;