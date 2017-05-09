/**
 * Created by jonlazarini on 06/05/17.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SomethingComponent } from '../components/SomethingComponent';
import { createSomething } from '../actions/something';

// props for component from reducer
const mapStateToProps = (state) => {
    return { text: state.something.text };
};

// functions for your props
const mapDispatchToProps = (dispatch) =>

    bindActionCreators({
        newMessage: () => createSomething('barz')
        // redux-thunk enables to give dispatcher/dispatch down the line for other MW/async
    }, dispatch);
    // return {
    //     newMessage(something) {
            //// dispatching action type and its 'something payload with 'batz' value
            // return () => dispatch(createSomething('batz'));
        // }
    // };


export default connect(mapStateToProps, mapDispatchToProps)(SomethingComponent);