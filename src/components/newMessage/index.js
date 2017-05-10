/**
 * Created by jonlazarini on 09/05/17.
 */
import React from 'react';


const NewMessage = ({ newMessage, handleChange, handleSubmit }) => {
    let uid = Math.floor((Math.random() * 10000) + 1000);
    return(
        <form
            action="submit"
            onSubmit={ (e) => handleSubmit(e, newMessage, uid) }
         >
            {/* TODO undefined argument is uid, to be replaced when connecting firebase */}
            <label htmlFor="new_message">
                new message:
                <input
                    id="new_message"
                    type="text"
                    onChange={ handleChange }
                    value={ newMessage }/>
            </label>
            <button type="submit">send message</button>
        </form>
    )
};

export default NewMessage
