/**
 * Created by russell on 8/9/2017.
 */
import {connect} from 'react-redux'
import Dashboard from '../components/Dashboard.js'

const mapStateToProps = (state, opts) => ({
    data: {
        currentlySending: state.auth.get('currentlySending'),
        formState: state.auth.get('formState'),
        error: state.auth.get('error'),
    }
})

export default connect(mapStateToProps)(Dashboard)