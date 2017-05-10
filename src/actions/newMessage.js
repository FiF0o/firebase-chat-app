/**
 * Created by jonlazarini on 09/05/17.
 */
import { UPDATE_NEW_MESSAGE, CLEAR_NEW_MESSAGE } from '../actionTypes';

export const updateNewMessage = (message) => {
    console.log('UPDATE_NEW_MESSAGE message', message);
    return {
        type: UPDATE_NEW_MESSAGE,
        message
    }
};

export const clearNewMessage = () => {
    return {
        type: CLEAR_NEW_MESSAGE
    }
};
