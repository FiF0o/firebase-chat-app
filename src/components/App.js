import React from 'react';
import PropTypes from 'prop-types';
import NewMessageContainer from '../containers/NewMessageContainer';
import MessagesContainer from '../containers/MessagesContainer';

import {User as CurrentUser} from '../components/User';

import SignIn from './SignIn';
import {Loading} from './Loading';
import {Error} from './Error';

import './App.css';


const App = ({ auth, signIn, signOut, ...props }) => (
    <main className="Application">
        <div className="Application--new-message">
            { auth.status === 'SIGNED_IN' && <NewMessageContainer /> }
        </div>
        <div className="Application--auth">
            { auth.status === 'ANONYMOUS' && <SignIn signingIn={ signIn } /> }
            { auth.status === 'SIGNED_IN' && <CurrentUser auth={auth} signOut={signOut} /> }
            { auth.status === 'WAITING_RESPONSE' && <Loading/> }
            { auth.status === 'ERRORED' && <Error error={auth.error} /> }
        </div>
        <div className="Application--messages-container" >
            <h2 className="mui--text-dark-secondary mui--text-headline">chat history</h2>
            <MessagesContainer />
        </div>
    </main>
);

App.propTypes = {
    auth: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
};


export default App;
