import React from 'react';

import { LOCATION_NAMES } from '../../../constants';

import { LOCATION_DESCRIPTIONS } from './timetable__location-header.constants';

import './timetable__location-header.css';

const TimetableLocationHeader = ({location}) => (
    <header className="timetable__location-header">
        <div className="timetable__location-title">
            {LOCATION_NAMES[location]}
        </div>
        {LOCATION_DESCRIPTIONS[location] &&
            <div className="timetable__location-description">
                {LOCATION_DESCRIPTIONS[location]}
            </div>}
    </header>
);

export default TimetableLocationHeader;
