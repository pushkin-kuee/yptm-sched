import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';

import { SLOT_HEIGHT } from '../timetable.constants';

import { END_HOUR, MINUTES_IN_SLOT, START_HOUR } from '../../../constants';
import { slotsFromStart } from '../../../utils';

import './timetable__now.css';

class TimetableNow extends PureComponent {
    constructor(props) {
        super(props);

        this.onThisRef = this.onThisRef.bind(this);
    }

    componentDidUpdate({now: prevNow}) {
        const {now} = this.props;

        if (now !== prevNow && this.ref) {
            scrollToComponent(this.ref);
        }
    }

    onThisRef(thisNode) {
        this.ref = thisNode;
    }

    render() {
        const {eventsByLocationBySlots, now} = this.props;

        if (!now) {
            return null;
        }

        const end_time = new Date();
        end_time.setHours(END_HOUR, (END_HOUR - Math.floor(END_HOUR)) * 60, 0, 0);

        const offsetFromTop = slotsFromStart(
            new Date(Math.min(now, end_time)), START_HOUR, MINUTES_IN_SLOT
        ) * SLOT_HEIGHT;

        return (
            <div
                className="timetable__now"
                ref={this.onThisRef}
                style={{top: offsetFromTop}}>
                    {Object.keys(eventsByLocationBySlots).map((_, i) =>
                        <div
                            className="timetable__now-line-segment"
                            key={i} />
                    )}
            </div>
        )
    }
}

TimetableNow.propTypes = {
    now: PropTypes.instanceOf(Date)
}

const mapStateToProps = ({app: {eventsByLocationBySlots, now}}) => (
    {eventsByLocationBySlots, now}
);

export default connect(mapStateToProps)(TimetableNow);
