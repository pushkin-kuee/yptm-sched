import b from 'b_';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MINUTES_IN_SLOT, FOR_CHILDREN_TAG } from '../../../constants';
import { setActiveEvent } from '../../app/redux/actions';

import { SLOT_HEIGHT } from '../timetable.constants';

import './timetable__event.css';

const TimetableEvent = ({activeTag, event, setActive, timeSlot}) => {
    const {duration, title, tags} = event;
    const highlighted = tags && activeTag && tags.includes(activeTag);
    const isForChildren = tags && tags.includes(FOR_CHILDREN_TAG);

    const minHeight = duration && duration / MINUTES_IN_SLOT * SLOT_HEIGHT - 10;

    return (
        <div
            className={b('timetable', 'event', {highlighted})}
            onClick={setActive}
            style={{minHeight}}>
                <div className="timetable__event-header">
                    <span className="timetable__event-time">{timeSlot}</span>
                    {isForChildren &&
                        <i className="timetable__event-for-children-icon" />}
                </div>
                <h3 className="timetable__event-title">{title}</h3>
        </div>
    );
};

TimetableEvent.propTypes = {
    activeTag: PropTypes.string,
    event: PropTypes.object.isRequired,
    timeSlot: PropTypes.string.isRequired
};

const mapStateToProps = ({app: {activeTag}}) => ({activeTag});

const mapDispatchToProps = (dispatch, {event}) => {
    return bindActionCreators({
        setActive: () => setActiveEvent(event)
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TimetableEvent);
