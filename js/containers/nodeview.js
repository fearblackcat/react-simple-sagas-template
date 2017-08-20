/**
 * Created by russell on 8/10/2017.
 */
import NodeView from '../components/nodeview.js'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownprops) => ({
    node: ownprops.node,
})

const NodeViewPanel = connect(mapStateToProps)(NodeView)
export default NodeViewPanel
