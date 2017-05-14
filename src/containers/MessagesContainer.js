/**
 * Created by jonlazarini on 09/05/17.
 */
import { connect } from 'react-redux';
import Messages from '../components/Messages';
import { destroyMessage } from '../actions/messages';


const mapStateToProps = ({ messages }) => {
    //state.messages (reducer) from our store
    return { messages };
};

const mapDispatchToProps = (dispatch) => {
    return {
        destroyMessage(key) {
            return () => dispatch(destroyMessage(key));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);