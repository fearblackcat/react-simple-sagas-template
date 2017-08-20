/**
 * Created by russell on 8/9/2017.
 */
import UserProfileView from '../components/common/UserProfile.js'
import { connect } from 'react-redux'

const mapStateToProps = (state, opts) => ({
    userinfo: state.auth.get('userinfo') ? state.auth.get('userinfo') : localStorage.username,
})

const UserProfile = connect(mapStateToProps)(UserProfileView)
export default UserProfile
