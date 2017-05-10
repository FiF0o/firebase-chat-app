/**
 * Created by jonlazarini on 09/05/17.
 */
import omit from 'lodash/omit';

import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actionTypes';
import { initialState } from '../initial-state';

export default function messages(state = initialState.messages, action) {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [action.key]: {
                    message: action.message,
                    timeStamp: action.timeStamp,
                    uid: action.uid
                }
            };
        case REMOVE_MESSAGE:
            // we don't mutate the state - clone the previous state and remove the message we want (by key)
            return omit(Object.assign({}, state), action.key);
        default:
            return state;
    }
}
