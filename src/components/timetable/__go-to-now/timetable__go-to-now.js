import PropTypes from 'prop-types';
import React from 'react';

import './timetable__go-to-now.css';

const TimetableGoToNow = ({updateNow}) => (
    <span className="timetable__go-to-now" onClick={updateNow}>
        <svg className="timetable__go-to-now-icon" version="1.1" x="0px" y="0px" viewBox="0 0 15 15" style={{enableBackground: 'new 0 0 15 15'}}>
            <g>
                <path d="M7.5,0C3.364,0,0,3.364,0,7.5S3.364,15,7.5,15S15,11.636,15,7.5S11.636,0,7.5,0z M7.5,13C4.467,13,2,10.532,2,7.5   C2,4.467,4.467,2,7.5,2C10.532,2,13,4.467,13,7.5C13,10.532,10.532,13,7.5,13z" />
                <polygon points="8,3 7,3 7,8 11,8 11,7 8,7  " />
                </g>
            </svg>
    </span>
);

TimetableGoToNow.propTypes = {
    updateNow: PropTypes.func.isRequired
};

export default TimetableGoToNow;
