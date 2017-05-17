import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApplicationContainer from './containers/ApplicationContainer';

import {store} from './store';

import { listeningToAuthChanges, listeningToMessages, ListeningForUsers } from './utils/listeners';

import './index.css';
import '../node_modules/muicss/dist/css/mui.min.css';
import '../node_modules/muicss/dist/js/mui.js';


/**
 * Fires listener functions here to dispatch actions to
 * the user once 'things' are added to the DB.
 */
store.dispatch(listeningToAuthChanges());
store.dispatch(listeningToMessages());
store.dispatch(ListeningForUsers());


ReactDOM.render(
    <Provider store={store}>
        <ApplicationContainer />
    </Provider>,
  document.getElementById('root')
);
