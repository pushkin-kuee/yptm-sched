import React from 'react';

import { LOCATION_LABELS } from '../../../constants';

import EventsInLocation from '../__events-in-location/timetable__events-in-location';

import './timetable__events.css';

const TimetableEvents = () => (
    <div className="timetable__events">
        {LOCATION_LABELS.map(location =>
            <EventsInLocation
                location={location}
                key={location} />)}
    </div>
);

export default TimetableEvents;
