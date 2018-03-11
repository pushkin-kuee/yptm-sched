import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({match}) => (
    <div className="main">
        <h1 className="main__title">#япокажутебемузей</h1>
        <div className="main__menu">
            <Link to={`${match.url}timetable/`}>
                Расписание
            </Link>
            <Link to={`${match.url}list/`}>
                Список
            </Link>
        </div>
    </div>
);

Main.propTypes = {
    match: PropTypes.object.isRequired
};

export default Main;
