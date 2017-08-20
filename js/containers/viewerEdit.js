/**
 * Created by russell on 8/11/2017.
 */
import ViewEdit from '../components/viewerEdit.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setPostData } from '../actions/treeview.js'

const mapStateToProps = (state, ownprops) => ({
    data: ownprops.data,
})


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ setPostData }, dispatch),
})

const ViewEditPanel = connect(mapStateToProps, mapDispatchToProps)(ViewEdit)
export default ViewEditPanel
