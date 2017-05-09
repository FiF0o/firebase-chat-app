/**
 * Created by jonlazarini on 06/05/17.
 */
import React from 'react';


export const SomethingComponent = ({text, newMessage }) => {
    return (
        <div>
            <button onClick={ newMessage }>newMessage to dispatch</button>
            <p>{text}</p>
        </div>
    )
};
