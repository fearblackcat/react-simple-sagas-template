/**
 * Created by russell on 8/10/2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from '../treestyles/styles.js'

const HELP_MSG = 'Select A Node To See Its Data Structure Here...'

export default class NodeViewer extends Component {
    render() {
        const style = styles.viewer;
        let json = null

        if(this.props.node && this.props.node.desc) {
            json = this.props.node.desc
            //JSON.stringify(this.props.node.desc, null, 4)
        }

        if (!json) {
            json = HELP_MSG;
        }

        return <div style={style.base}>{json}</div>
    }
}

NodeViewer.propTypes = {
    node: PropTypes.object
}