/**
 * Created by jonlazarini on 09/05/17.
 */
import {database} from '../database/firebase';

import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actionTypes';

import {clearNewMessage} from './newMessage';

export const addMessage = ({message, uid}, key = Date.now()) => {
    return {
        type: ADD_MESSAGE,
        message,
        key,
        timeStamp: Date.now(),
        uid
    }
};

const messagesRef = database.ref('/messages');

export const createMessage = (message, uid) => {
    return (dispatch) => {
        // addMessage(message, uid);
        const payload = {
            message,
            uid,
            timeStamp: Date.now(),
        };

       messagesRef.push(payload)
            .then(() => dispatch(clearNewMessage()));
    }
};

export const removeMessage = (key) => {
    return {
        type: REMOVE_MESSAGE,
        key
    }
};

export const destroyMessage = (key) => {
    return (dispatch) => {
        messagesRef.child(key).remove()
            .then(() => dispatch(removeMessage(key)))
    }
};

