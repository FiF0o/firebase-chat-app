/**
 * Created by jonlazarini on 06/05/17.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { signIn, signOut } from '../actions/auth';


const mapStateToProps = (state) => {
    return { auth: state.auth };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
       signIn: () => signIn(),
       signOut: () => signOut()
    }, dispatch);

/*
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => {
            dispatch({type: 'ATTEMPT_LOGIN'});
            dispatch(signIn())
        },
        signOut: () => {
            dispatch(signOut())
        }

    }
};
*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
