/**
 * Created by jonlazarini on 06/05/17.
 */
import { connect } from 'react-redux';
import App from '../components/App';
// import { signIn, signOut } from '../actions/auth';


const mapStateToProps = ({ auth }) => {
    return {
        auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn() { dispatch(signIn()); },
        signOut() { dispatch(signOut()); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);