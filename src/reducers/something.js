/**
 * Created by jonlazarini on 06/05/17.
 */
import { ADD_SOMETHING } from '../actionTypes';
import {initialState} from '../initial-state'

export default function testReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_SOMETHING:
            // returns how our state will look like depending on the actionType
            return {
                ...state,
                text: action.text
            };
        default:
            return state
    }
};
