/**
 * Created by jonlazarini on 09/05/17.
 */
import React from 'react';

const Message = ({ message, destroyMessage, belongToCurrentUser, user, ...props }) => (
    <article>
        <div>
            <img src={user.photoURL} alt="" width="60" height="60" />
            <h6>{user.displayName}</h6>
        </div>
        <p>{ message }</p>
        <footer>
            {
                belongToCurrentUser ?
                    <button onClick={destroyMessage}>Delete message</button>
                    :
                    null
            }
        </footer>
    </article>
);

export default Message
