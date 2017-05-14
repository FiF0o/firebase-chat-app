/**
 * Created by jonlazarini on 10/05/17.
 */
import { auth, googleAuthProvider } from '../database/firebase';
import { SIGN_IN, SIGN_OUT, ATTEMPT_LOGIN } from '../actionTypes';

// expected response from firebase
let userMock = {
    email: 'lorem.ipsum@example.com',
    displayName: 'Kikou Lol',
    photoURL: 'http://placehold.it/150x150',
    uid: 'firstUser'
};

export const signIn = () => {
    return (dispatch) => {
        // triggers Loading view from here
        dispatch({type: ATTEMPT_LOGIN});
        //TODO replace with firebase APIs: auth, etc.. - Listener function will handle dispatching actions
        // eslint-disable-next-line
        // dispatch(signedIn(userMock)); // dispatch the next action to trigger the redux flow
        auth.signInWithPopup(googleAuthProvider);
    }
};

// we will store the user from firebase here
export const signedIn = (user) => {
    return {
        type: SIGN_IN,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid
    }
};

export const signOut = () => {
    return (dispatch) => {
        dispatch({type: ATTEMPT_LOGIN});
        // eslint-disable-next-line
        dispatch(signedOut());
    }
};

export const signedOut = () => {
    return {
        type: SIGN_OUT
    };
};

// export const signIn = () => {
//     return {
//         type: SIGN_IN,
//         email: 'lorem.ipsum@example.com',
//         displayName: 'Kikou Lol',
//         photoURL: 'http://placehold.it/150x150',
//         uid: 'firstUser'
//     };
// };

// export const signOut = () => {
//     return {
//         type: SIGN_OUT,
//     };
// };
