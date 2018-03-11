import PropTypes from 'prop-types';
import React from 'react';

import './event-info__times.css';

const EventInfoTimes = ({times}) => (
    <div className="event-info__times">
        {times.map((time, index) =>
            <span className="event-info__time" key={index}>{time}</span>)}
    </div>
);

EventInfoTimes.propTypes = {
    times: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default EventInfoTimes;
