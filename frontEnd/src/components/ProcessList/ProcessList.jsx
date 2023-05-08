import React from 'react';
import PropTypes from 'prop-types';
import './ProcessList.css';
import Process from '../Process/Process';

function ProcessList(props) {
  const { processes } = props;

  return (
    <ul className="process-list grid-1span2">
      <li className="process-list__header process-grid">
        <div>PID</div>
        <div>Command</div>
        <div>User</div>
        <div style={{textAlign: 'center'}}>CPU %</div>
        <div style={{textAlign: 'center'}}>Memory %</div>
      </li>
      {processes.map((process) => (
        <Process process={process} key={process.pid} className="process-list__item process-grid" />
      ))}
    </ul>
  );
}


ProcessList.propTypes = {
  processes: PropTypes.arrayOf(
    PropTypes.shape({
      // pid: PropTypes.number.isRequired,
      // command: PropTypes.string.isRequired,
      // user: PropTypes.string.isRequired,
      // cpu: PropTypes.number.isRequired,
      // mem: PropTypes.number.isRequired,
    })
  ).isRequired
};

export default ProcessList;
