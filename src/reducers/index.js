/**
 * Created by jonlazarini on 06/05/17.
 */
import { combineReducers } from 'redux';
import testReducer from './something';


const reducer = combineReducers({
    // slice of our state where we assign our reducer
    something: testReducer
});

export default reducer;