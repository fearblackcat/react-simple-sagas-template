/**
 * Created by russell on 8/9/2017.
 */
import NavView from '../components/common/Nav.js'
import { setUserInfo } from '../actions/auth.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = (state, opts) => ({
    loggedIn: opts.loggedIn,
    currentlySending: opts.currentlySending,
    userinfo: state.auth.get('userinfo'),
})
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ setUserInfo }, dispatch),
})

const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavView)
export default NavBar