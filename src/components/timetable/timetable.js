import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveEvent, updateNow } from '../app/redux/actions';
import EventInfo from '../event-info/event-info';
import Modal from '../modal/modal';

import Events from './__events/timetable__events';
import GoToNow from './__go-to-now/timetable__go-to-now';
import TimeSlots from './__time-slots/timetable__time-slots';
import Now from './__now/timetable__now';

import './timetable.css';

class Timetable extends PureComponent {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        const {updateNow} = this.props;

        updateNow();
    }

    componentWillUnmount() {
        this.closeModal();
    }

    closeModal() {
        const {resetActiveEvent} = this.props;

        resetActiveEvent();
    }

    render() {
        const {activeEvent, updateNow} = this.props;

        return (
            <div className="timetable">
                <div className="timetable__content">
                    <TimeSlots />
                    <Events />
                    <Now />
                    <GoToNow updateNow={updateNow} />
                </div>
                <Modal
                    isOpen={!!activeEvent}
                    onRequestClose={this.closeModal}>
                        {activeEvent &&
                            <EventInfo
                                mix="timetable__event-info"
                                event={activeEvent} />}
                </Modal>
            </div>
        )
    }
}

Timetable.propTypes = {
    activeEvent: PropTypes.object,
    match: PropTypes.object.isRequired,
    resetActiveEvent: PropTypes.func.isRequired,
    updateNow: PropTypes.func.isRequired
};

const mapStateToProps = ({app: {activeEvent}}) => ({activeEvent});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        resetActiveEvent: () => setActiveEvent(null),
        updateNow
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Timetable);
