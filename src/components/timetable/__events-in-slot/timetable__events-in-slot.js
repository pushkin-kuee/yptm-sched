import React from 'react';

import { SLOT_HEIGHT } from '../timetable.constants';
import Event from '../__event/timetable__event';

import './timetable__events-in-slot.css';

const EventsInSlot = ({eventsInSlot, slotIndex, timeSlot}) => {
    if (!eventsInSlot || eventsInSlot.length === 0) {
        return null;
    }

    const style = {
        top: SLOT_HEIGHT * slotIndex
    };

    return (
        <div className="timetable__events-in-slot" style={style}>
            {eventsInSlot.map((event, index) =>
                <Event event={event} key={index} timeSlot={timeSlot} />)}
        </div>
    );
};

export default EventsInSlot;
