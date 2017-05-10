import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import {initialState} from './initial-state';
import ApplicationContainer from './containers/ApplicationContainer';

import {database} from './database/firebase';
import './index.css';

// debug firebase
database.ref().set('it worked');

const middleware = [ thunk, createLogger() ];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware),
        ...enhancers
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ApplicationContainer />
    </Provider>,
  document.getElementById('root')
);
