/**
 * Created by russell on 8/11/2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from '../treestyles/styles.js'

const HELP_MSG = 'Add sending datas and parameters...'

export default class EditViewer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text : ""
        }

        this.isEditChange = false

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        e.preventDefault()
        e.stopPropagation()
        const newText = e.target.value
        this.props.actions.setPostData(newText)
        this.isEditChange = true
        this.setState({text : newText})
    }

    render() {
        const style = styles.editor;
        const {text} = this.state
        let json = null, showobj = null, showstr = null
        if(this.props.data) {
            try {
                if(text && this.isEditChange) {
                    this.isEditChange = false
                    try {
                        showobj = JSON.parse(text)
                    } catch (e) {
                        json = text
                    }
                } else {
                    showobj = JSON.parse(this.props.data)
                }
            } catch (e) {
                json = null
            }
        }
        //let json = JSON.stringify(this.props.data, null, 4)

        if (!json) {
            json = HELP_MSG;
        }

        if(showobj) {
            showstr = JSON.stringify(showobj, null, 4)
        }

        if(!showstr) {
            showstr = json
        }

        return <textarea style={style.base}  onChange={this.onChange} value={showstr} />
    }
}

EditViewer.propTypes = {
    data: PropTypes.string
}