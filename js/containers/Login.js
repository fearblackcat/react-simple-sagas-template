/**
 * Created by russell on 8/9/2017.
 */
import {connect} from 'react-redux'
import Login from '../components/Login.js'

const mapStateToProps = (state, opts) => ({
    data: {
        currentlySending: state.auth.get('currentlySending'),
        formState: state.auth.get('formState'),
        error: state.auth.get('error'),
    }
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(Login)