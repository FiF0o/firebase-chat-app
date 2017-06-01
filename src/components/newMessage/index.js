/**
 * Created by jonlazarini on 09/05/17.
 */
import React from 'react';


const NewMessage = ({ newMessage, auth, handleChange, handleSubmit }) => {
    // let uid = Math.floor((Math.random() * 10000) + 1000);
    return(
        <form
            className="mui-form--inline"
            action="submit"
            onSubmit={ (e) => handleSubmit(e, newMessage, auth.uid) }
         >
            <div className="mui-textfield mui-textfield--float-label" id="new_message">
                <input
                    type="text"
                    onChange={ handleChange }
                    value={ newMessage }
                />
                <label>new message</label>
            </div>
            <button type="submit" className="mui-btn mui-btn--primary">send message</button>
        </form>
    )
};

export default NewMessage
