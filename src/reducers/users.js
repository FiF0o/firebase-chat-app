/**
 * Created by jonlazarini on 11/05/17.
 */
import { ADD_USER } from '../actionTypes';
import {initialState} from '../initial-state';

export default function users(state=initialState.users, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                [action.uid]: {
                    email: action.email,
                    displayName: action.displayName,
                    photoURL: action.photoURL
                }
            };
        default:
            return state;
    }
};
