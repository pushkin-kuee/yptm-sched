import PropTypes from 'prop-types';
import React from 'react';

import Tag from '../__tag/event-info__tag';

import './event-info__tags.css';

const EventInfoTags = ({tags}) => (
    <div className="event-info__tags">
        {tags.map((tag, index) => <Tag key={index} tag={tag} />)}
    </div>
);

EventInfoTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default EventInfoTags;
