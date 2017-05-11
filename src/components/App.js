import React from 'react';
import PropTypes from 'prop-types';
import NewMessageContainer from '../containers/NewMessageContainer';
import MessagesContainer from '../containers/MessagesContainer';

import SignIn from './SignIn';

import './App.css';

// props will be passed down to the containers as props
const App = ({ auth, signIn, signOut, ...props }) => (
    <main className="Application">
        <div className="Application--sidebar">
            { auth.status === 'ANONYMOUS' && <SignIn signingIn={ signIn } /> }
            { auth.status === 'SIGNED_IN' && <NewMessageContainer /> }
            { auth.status === 'SIGNED_IN' && <button onClick={signOut}>Sign out</button> }
        </div>
        <MessagesContainer />
    </main>
);

App.propTypes = {
    auth: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
};

export default App;
