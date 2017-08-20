import {connect} from 'react-redux'
import App from '../components/App.js'

const mapStateToProps = (state, opts) => ({
    data: {
        currentlySending: state.auth.get('currentlySending'),
        loggedIn: state.auth.get('loggedIn'),
    }
})

export default connect(mapStateToProps)(App)