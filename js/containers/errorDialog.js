/**
 * Created by russell on 8/13/2017.
 */
import ErrorDialogView from '../components/errorDialog.js'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { HideErrorDialog } from '../actions/treeview.js'

const mapStateToProps = (state) => ({
    error_data: state.treeview.get('error_data'),
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ HideErrorDialog }, dispatch),
})

const ShowErrorDialog = connect(mapStateToProps, mapDispatchToProps)(ErrorDialogView)
export default ShowErrorDialog
