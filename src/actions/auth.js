/**
 * Created by jonlazarini on 10/05/17.
 */
import { SIGN_IN, SIGN_OUT } from '../actionTypes';

export const signIn = () => {
    // from firebase
    return {
        type: SIGN_IN,
        email: 'lorem.ipsum@example.com',
        displayName: 'Kikou Lol',
        photoURL: 'http://placehold.it/150x150',
        uid: 'firstUser'
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
