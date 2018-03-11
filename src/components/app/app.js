import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';

import Timetable from '../timetable/timetable';

import EVENTS from '../../events.json';

import { setEventData } from './redux/actions';

import './app.css';

class App extends Component {
    componentWillMount() {
        const {setEventData} = this.props;

        setEventData(EVENTS);
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={Timetable} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setEventData}, dispatch);
};

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(App);
