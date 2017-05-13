import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApplicationContainer from './containers/ApplicationContainer';

import {store} from './store';

import { listeningToAuthChanges } from './utils/listeners';

import './index.css';


/**
 * Fires listener functions here
 */
store.dispatch(listeningToAuthChanges());


ReactDOM.render(
    <Provider store={store}>
        <ApplicationContainer />
    </Provider>,
  document.getElementById('root')
);
