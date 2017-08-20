/**
 * Created by russell on 8/10/2017.
 */
import TreePanelView from '../components/treepanel.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setReqUrl, setPostData } from '../actions/treeview.js'

const mapStateToProps = (state, ownprops) => ({
    extradata: {},
    showErrDialog: state.treeview.get('showErrDialog'),
    showRespDialog: state.treeview.get('showRespDialog')
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ setReqUrl, setPostData }, dispatch),
})

const DashTreePanel = connect(mapStateToProps, mapDispatchToProps)(TreePanelView)
export default DashTreePanel
