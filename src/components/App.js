import React from 'react';
import PropTypes from 'prop-types';
import NewMessageContainer from '../containers/NewMessageContainer';
import MessagesContainer from '../containers/MessagesContainer';
import './App.css';

// props will be passed down to the containers as props
const App = ({ auth, ...props }) => {
    return (
        <main className="Application">
            <div className="Application--sidebar">
                Sidebar section
            </div>
            <NewMessageContainer />
            <MessagesContainer />
        </main>
    );
};

App.propTypes = {
    // TODO Must be required
    auth: PropTypes.object,
    //TODO Import signIn() and signOut()
};

export default App;
