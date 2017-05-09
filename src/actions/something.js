/**
 * Created by jonlazarini on 06/05/17.
 */
import { ADD_SOMETHING } from '../actionTypes';

export const addSomething = (text) => {
    return {
        type: ADD_SOMETHING,
        text
    };
};

export const createSomething = (something) => {
    return addSomething(something);
};
