import b from 'b_';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import EventsInSlot from '../__events-in-slot/timetable__events-in-slot';
import LocationHeader from '../__location-header/timetable__location-header';

import './timetable__events-in-location.css';

const TimetableEventsInLocation = ({location, eventsBySlots}) => (
    (eventsBySlots || null) && (
        <div className={b('timetable', 'events-in-location', {location})}>
            <LocationHeader location={location} />
            <div className="timetable__events-in-location-content">
                {Object.keys(eventsBySlots).map((slot, index) => {
                    const eventsInSlot = eventsBySlots[slot];

                    return (
                        <EventsInSlot
                            eventsInSlot={eventsInSlot}
                            key={index}
                            slotIndex={index}
                            timeSlot={slot} />
                    );
                })}
            </div>
        </div>
    )
);

TimetableEventsInLocation.propTypes = {
    location: PropTypes.string.isRequired,
    eventsBySlots: PropTypes.object.isRequired
};

const mapStateToProps = ({app: {eventsByLocationBySlots}}, {location}) => {
    return {eventsBySlots: eventsByLocationBySlots[location]};
}

export default connect(mapStateToProps)(TimetableEventsInLocation);
