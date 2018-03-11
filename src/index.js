import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux'

import './index.css';
import App from './components/app/app';
import appReducer from './components/app/redux/reducers';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

const rootReducer = combineReducers({
    app: appReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
// registerServiceWorker();
unregister();
