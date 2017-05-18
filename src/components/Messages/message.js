/**
 * Created by jonlazarini on 09/05/17.
 */
import React from 'react';

const Message = ({ message, destroyMessage, belongToCurrentUser, user, ...props }) => (
    <article className="post">
        <div className="post--image">
            <img src={user.photoURL} alt="" width="60" height="60" />
            <h6 className="mui--text-caption">{user.displayName}</h6>
        </div>
        <p className="mui--text-body1 mui--text-center">{ message }</p>
        <footer>
            {
                belongToCurrentUser ?
                    <button onClick={destroyMessage} className="mui-btn mui-btn--danger" >Delete message</button>
                    :
                    null
            }
        </footer>
    </article>
);

export default Message
