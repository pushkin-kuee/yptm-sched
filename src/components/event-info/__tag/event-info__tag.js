import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveTag } from '../../app/redux/actions';

import './event-info__tag.css';

const EventInfoTag = ({setActiveTag, tag}) =>  (
    <span className="event-info__tag" onClick={setActiveTag}>{tag}</span>
);

EventInfoTag.propTypes = {
    setActiveTag: PropTypes.func.isRequired,
    tag: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch, {tag}) => {
    return bindActionCreators({
        setActiveTag: () => setActiveTag(tag)
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(EventInfoTag);
