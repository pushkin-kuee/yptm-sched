import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';

import Main from '../main/main';
import Timetable from '../timetable/timetable';

import { setEventData } from './redux/actions';
import { EXAMPLE_EVENT_DATA } from '../../constants';

import './app.css';

class App extends Component {
    componentWillMount() {
        const {setEventData} = this.props;

        setEventData(EXAMPLE_EVENT_DATA);
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={Main} />
                <Route path="/timetable" component={Timetable} />
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
