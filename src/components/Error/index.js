/**
 * Created by jonlazarini on 12/05/17.
 */
import React from 'react';

export const Error = (err) => {
    console.log('err:', err);
    return(
        <div>
            error is: {err}
        </div>
    )
};
