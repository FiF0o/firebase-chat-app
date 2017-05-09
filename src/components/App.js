import React, { PropTypes } from 'react';
import SomethingContainer from '../containers/SomethingContainer';
import './App.css';

// props will be passed down to the containers as props
const App = ({ auth, signIn, signOut }) => {
    return (
        <main className="Application">
            <div className="Application--sidebar">
                App component
            </div>
            Container placed here
            <SomethingContainer />
        </main>
    );
};

App.propTypes = {
    // auth: PropTypes.object.isRequired,
    // signIn: PropTypes.func.isRequired,
    // signOut: PropTypes.func.isRequired
};

export default App;
