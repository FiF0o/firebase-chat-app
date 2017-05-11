/**
 * Created by jonlazarini on 11/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';


export const User = ({auth, signOut}) => (
    <div>
        <img src={auth.photoURL} alt={auth.displayName}/>
        <h2>{auth.displayName}</h2>
        <h3>{auth.email}</h3>
        <button onClick={signOut}  >Sign Out</button>
    </div>
);

User.propTypes = {
    //todo does it work?
    auth: PropTypes.shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
        photoURL: PropTypes.string,
        uid: PropTypes.string.isRequired
    }),
    signOut: PropTypes.func.isRequired
};
