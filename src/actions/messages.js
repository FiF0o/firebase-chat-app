/**
 * Created by jonlazarini on 09/05/17.
 */
import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actionTypes';

export const addMessage = (message, uid, key= Date.now()) => {
    return {
        type: ADD_MESSAGE,
        message,
        key,
        timeStamp: Date.now(),
        uid
    }
};

export const createMessage = (message, uid) => {
    return addMessage(message, uid);
};

export const removeMessage = (key) => {
    return {
        type: REMOVE_MESSAGE,
        key
    }
};
