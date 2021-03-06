/**
 * Created by jonlazarini on 13/05/17.
 */
import pick from 'lodash/pick';

import { auth, database } from '../database/firebase';

import { signedIn, signedOut } from '../actions/auth';
import { addMessage, removeMessage } from '../actions/messages';
import { addUser } from '../actions/users';

import registerMessaging from './register-messaging';


const usersRef = database.ref('users');

//TODO Replace listeners utils by middlewares
export const listeningToAuthChanges = () => {
    return (dispatch) => {
        // payload from firebase
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signedIn(user));
                let u = pick(user, ['displayName', 'photoURL', 'email', 'uid']);
                // write user to the DB
                usersRef.child(user.uid)
                    .set(u);

                registerMessaging(user);
            }
            else dispatch(signedOut());
        })
    }
};


const messagesRef = database.ref('/messages');

export const listeningToMessages = () => {
    return (dispatch) => {
        messagesRef.on('child_added', (snapshot) => {
            dispatch(addMessage(snapshot.val(), snapshot.key));
        });

        messagesRef.on('child_changed', (snapshot) => {
            dispatch(addMessage(snapshot.val(), snapshot.key));
        });

        messagesRef.on('child_removed', (snapshot) => {
            dispatch(removeMessage(snapshot.key));
        });
    }
};

export const ListeningForUsers = () => {
    return (dispatch) => {
        usersRef.on('child_added', (snapshot) => {
            dispatch(addUser(snapshot.val()));
        });
    };
};
