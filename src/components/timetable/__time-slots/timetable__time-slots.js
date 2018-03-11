import React from 'react';

import { HUMAN_TIME_SLOTS, VISIBLE_EACH_MINUTE } from '../../../constants';
import { formatTime } from '../../../utils';

import './timetable__time-slots.css';

const TimetableTimeSlots = () => (
    <div className="timetable__time-slots">
        {HUMAN_TIME_SLOTS.map(({hour, minute}) => (
            <div className="timetable__five-minute-slot" key={`${hour}:${minute}`}>
                {minute % VISIBLE_EACH_MINUTE === 0 && formatTime(hour, minute)}
            </div>
        ))}
    </div>
);

export default TimetableTimeSlots;
