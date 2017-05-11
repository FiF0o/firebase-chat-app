/**
 * Created by jonlazarini on 06/05/17.
 */
export const initialState = {
    // slice of our state/reducer
    auth: {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
    },
    messages: {
        'firstMessage': {
            message: 'Marv Luvvhini est un peu un vier.',
            timeStamp: Date.now() - 600,
            uid: 'firstUser'
        },
        // from firebase
        'secondMessage': {
            message: 'Peut etre pas autant que Tromblonator, le roi des tromblons!',
            timeStamp: Date.now() - 540,
            uid: 'secondUser'
        }
    },
    newMessage: ''
};
