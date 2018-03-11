import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveEvent, setActiveTag } from '../app/redux/actions';

import Tags from './__tags/event-info__tags';
import Header from './__header/event-info__header';

import './event-info.css';

class EventInfo extends PureComponent {
    componentWillMount() {
        const {activeTag,  event, event: {tags}, setActiveEvent, resetActiveTag} = this.props;

        if (!activeTag) {
            return;
        }

        if (!tags.includes(activeTag)) {
            resetActiveTag();
            setActiveEvent(event);
        }
    }

    render() {
        const {
            event: {description, location, tags, times, title},
            mix
        } = this.props;

        return (
            <div className={cx('event-info', mix)}>
                <Header {...{location, times, title}} />
                <ReactMarkdown className="event-info__description" source={description} />
                <Tags tags={tags} />
            </div>
        );
    }
}

EventInfo.propTypes = {
    activeTag: PropTypes.string,
    event: PropTypes.shape({
        description: PropTypes.string.isRequired,
        duration: PropTypes.number,
        location: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        times: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired
    }),
    mix: PropTypes.string,
    resetActiveTag: PropTypes.func.isRequired,
    setActiveEvent: PropTypes.func.isRequired
}

const mapStateToProps = ({app: {activeTag}}) => ({activeTag});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        resetActiveTag: () => setActiveTag(null),
        setActiveEvent
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo);
