/**
 * Created by jonlazarini on 11/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';


export const User = ({auth, signOut}) => (
    <div className="Profile--card">
        <img src={auth.photoURL} alt={auth.displayName}/>
        <h2 className="mui--text-subhead">{auth.displayName}</h2>
        <h3 className="mui--text-menu">{auth.email}</h3>
        <button onClick={signOut} className=" mui-btn mui-btn--raised" >Sign Out</button>
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
