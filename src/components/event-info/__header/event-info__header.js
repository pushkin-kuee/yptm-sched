import PropTypes from 'prop-types';
import React from 'react';

import { LOCATIONS } from '../../../constants';

import Times from '../__times/event-info__times';

const EventInfoHeader = ({location, times, title}) => (
    <header className="event-info__header">
        <h3 className="event-ifon__title">{title}</h3>
        <Times times={times} />
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
