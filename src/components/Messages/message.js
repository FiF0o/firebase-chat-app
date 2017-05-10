/**
 * Created by jonlazarini on 09/05/17.
 */
import React from 'react';

const Message = ({ message, deleteMessage, ...props }) => (
    <article>
        <div>
            <p>{ message }</p>
            <footer>
                <button onClick={deleteMessage}>Delete message</button>
            </footer>
        </div>
    </article>
);

export default Message