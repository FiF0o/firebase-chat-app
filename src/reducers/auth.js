/**
 * Created by jonlazarini on 10/05/17.
 */
import { SIGN_IN, SIGNED_IN, SIGN_OUT, ATTEMPT_LOGIN } from '../actionTypes';
import {initialState} from '../initial-state';

export default function auth(state=initialState.auth, action) {
     switch(action.type) {

         case SIGN_IN:
             return {
                 status: SIGNED_IN,
                 email: action.email,
                 displayName: action.displayName,
                 photoURL: action.photoURL,
                 uid: action.uid
             };

         case SIGN_OUT:
             return {
                 status: 'ANONYMOUS',
                 email: null,
                 displayName: null,
                 photoURL: null,
                 uid: null
             };

         case ATTEMPT_LOGIN:
             return {
                 status: 'WAITING_RESPONSE',
             };

         default:
             return state
     }
};
