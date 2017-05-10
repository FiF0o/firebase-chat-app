/**
 * Created by jonlazarini on 09/05/17.
 */
import { UPDATE_NEW_MESSAGE, CLEAR_NEW_MESSAGE } from '../actionTypes';
import { initialState } from '../initial-state';

export default function newMessage(state=initialState.newMessage, action) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return action.message;

        case CLEAR_NEW_MESSAGE:
            return '';

        default:
            return state
    }
};
