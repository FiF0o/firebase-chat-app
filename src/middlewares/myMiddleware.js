/**
 * Created by jonlazarini on 12/05/17.
 */
import { ERROR_SERVER, ATTEMPT_LOGIN } from '../actionTypes';

export const myMiddleware = store => next => action => {
    let result = next(action);
    const { type } = action;

    // when logging in
    if (type === ATTEMPT_LOGIN ) {
        try
        {
            // debug
            // throw new Error(`:'(`);
            console.log('MIDDLEWARE FIRED!!!');
        }
        catch (err)
        {
            console.error(err);
            store.dispatch({type: ERROR_SERVER, err});
        }
    }

    return result;
};
