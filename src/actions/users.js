/**
 * Created by jonlazarini on 11/05/17.
 */
import {ADD_USER} from '../actionTypes';

export const addUser = (user) => {
    return {
        type: ADD_USER,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
    }
};
