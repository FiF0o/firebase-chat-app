/**
 * Created by jonlazarini on 09/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';

import Message from './message';


const Messages = ({ messages, deleteMessage }) => (
    <section>
        {
            map(messages, (message, key) => (
                <Message
                    key={key}
                    id={key}
                    deleteMessage={deleteMessage(key)}
                    {...message}
                />
                )
            )
        }
    </section>
);

Messages.propTypes = {
    deleteMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired
};

export default Messages;
