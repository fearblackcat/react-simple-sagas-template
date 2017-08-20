/**
 * Created by russell on 8/12/2017.
 */
import {connect} from 'react-redux'
import SubmitBtn from '../components/submitButton.js'
import { bindActionCreators } from 'redux'
import { requestForAction } from '../actions/treeview.js'

const mapStateToProps = (state, opts) => ({
    url: state.treeview.get('request_url'),
    postdata: state.treeview.get('post_data'),
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({requestForAction}, dispatch),
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SubmitBtn)
