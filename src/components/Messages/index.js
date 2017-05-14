/**
 * Created by jonlazarini on 09/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';

import Message from './message';

import { belongToCurrentUser } from '../../utils/auth';


const Messages = ({ messages, destroyMessage, auth, users }) => (
    <section>
        {
            map(messages, (message, key) => (
                <Message
                    key={key}
                    id={key}
                    destroyMessage={destroyMessage(key)}
                    {...message}
                    user={users[message.uid]}
                    belongToCurrentUser={belongToCurrentUser(auth.uid, message.uid)}
                />
                )
            )
        }
    </section>
);

Messages.propTypes = {
    destroyMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired
};

export default Messages;
