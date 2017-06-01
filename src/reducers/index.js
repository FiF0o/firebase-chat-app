/**
 * Created by jonlazarini on 06/05/17.
 */
import { combineReducers } from 'redux';
import messages from './messages';
import newMessage from './newMessage';
import users from './users'
import auth from './auth';


const reducer = combineReducers({
    // slice of our state where we assign our reducer
    messages,
    newMessage,
    auth,
    users,
});

export default reducer;
