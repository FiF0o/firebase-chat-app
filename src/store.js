/**
 * Created by jonlazarini on 13/05/17.
 */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

import {initialState} from './initial-state';

import { loginMiddleware } from './middlewares/loginMiddleware';


const middleware = [ thunk, createLogger(), loginMiddleware ];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware),
        ...enhancers
    )
);
