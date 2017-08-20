/**
 * Created by russell on 8/12/2017.
 */
import ShowResponseDialog from '../components/respDialog.js'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { HideResponseDialog } from '../actions/treeview.js'

const mapStateToProps = (state) => ({
    response_data: state.treeview.get('responseResult'),
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ HideResponseDialog }, dispatch),
})

const ShowRspDialog = connect(mapStateToProps, mapDispatchToProps)(ShowResponseDialog)
export default ShowRspDialog
