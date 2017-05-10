/**
 * Created by jonlazarini on 06/05/17.
 */
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import App from '../components/App';
// import { signIn, signOut } from '../actions/auth';


// const mapStateToProps = ( auth={} ) => {
//     return { auth };
// };

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators({
    //    signIn: () => console.log('dispatch signIn process'),
    //    signOut: () => console.log('dispatch signOut process')
    // }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(undefined, undefined)(App);
