/**
 * Created by jonlazarini on 09/05/17.
 */
import { connect } from 'react-redux';
import NewMessage from '../components/newMessage';
import { updateNewMessage, clearNewMessage } from '../actions/newMessage';
import { createMessage } from '../actions/messages';

// from state/reducer - messages.newMessage
const mapStateToProps = ({ newMessage, auth }) => {
    // will be passed as props in NewMessage and used for messages action
    return { newMessage, auth };
};


const mapDispatchToProps = (dispatch) => {
    return {
        // from action creator
        handleChange(e) { dispatch(updateNewMessage(e.target.value)) },
        // e will get the message .value from the form field
        handleSubmit(e, message, uid) {
            e.preventDefault();
            dispatch(createMessage(message, uid));
            dispatch(clearNewMessage());
        }

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
