/**
 * Created by jonlazarini on 09/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';

import Message from './message';


const Messages = ({ messages, destroyMessage }) => (
    <section>
        {
            map(messages, (message, key) => (
                <Message
                    key={key}
                    id={key}
                    destroyMessage={destroyMessage(key)}
                    {...message}
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
