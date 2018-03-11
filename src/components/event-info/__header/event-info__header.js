import PropTypes from 'prop-types';
import React from 'react';

import { LOCATIONS, LOCATION_NAMES } from '../../../constants';

import Times from '../__times/event-info__times';

import './event-info__header.css';

const EventInfoHeader = ({location, times, title}) => (
    <header className="event-info__header">
        <h3 className="event-info__title">{title}</h3>
        <div className="event-info__header-data">
            <Times times={times} />
            <div className="event-info__location">
                {LOCATION_NAMES[location]}
            </div>
        </div>
    </header>
);

EventInfoHeader.propTypes = {
    location: PropTypes.oneOf(
        Object.keys(LOCATIONS).map(location => LOCATIONS[location])
    ).isRequired,
    times: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
};

export default EventInfoHeader;
