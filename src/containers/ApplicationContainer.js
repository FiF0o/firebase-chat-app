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


export default connect(mapStateToProps, mapDispatchToProps)(App);
