/**
 * Created by russell on 8/10/2017.
 */
import React, {Component} from 'react'
import {StyleRoot} from 'radium'
import {Treebeard, decorators} from 'react-treebeard'

import data from '../data/data.js'
import styles from '../treestyles/styles.js'
import * as filters from '../utils/filter.js'
import NodeViewer from '../containers/nodeview.js'
import EditViewer from '../containers/viewerEdit.js'
import ResponseDialog from '../containers/respDialog.js'
import ErrorDialog from '../containers/errorDialog.js'
import SubmitBtn from '../containers/submitButton.js'

import { fetchdata, getdatasource } from '../auth/Api.js'
import {transformToTreeData, cancelActiveNode} from '../data/transform.js'

// Example: Customising The Header Decorator To Include Icons
decorators.Header = ({style, node}) => {
    const iconType = node.children ? 'folder' : 'file-text'
    const iconClass = `fa fa-${iconType}`
    const iconStyle = {marginRight: '5px'}

    return (
        <div style={style.base}>
            <div style={style.title}>
                <i className={iconClass} style={iconStyle}/>

                {node.name}
            </div>
        </div>
    )
}

export default class TreePanel extends Component {
    constructor() {
        super()

        /*fetchdata('http://192.168.126.143:8000/policy-get', '').then((res)=>{
            console.log(res)
        }, (err) => {
            console.log(err)
        })*/
        this.treedata = {}

        this.state = {data}
        this.onToggle = this.onToggle.bind(this)
    }

    componentWillMount () {
        //http://192.168.126.143:8000
        getdatasource('/policy-get', '').then((result) => {
            console.log(result.data)
            transformToTreeData(result.data).then((res) => {
                this.treedata = res
                this.setState({data: res})
            })
        }, (err) => {
            console.log(err)
        })

    }

    onToggle(node, toggled) {
        const {cursor} = this.state

        if (cursor) {
            cursor.active = false
        }

        cancelActiveNode(this.treedata)

        node.active = true
        if (node.children) {
            node.toggled = toggled
        }

        if(!node.children) {
            this.props.actions.setReqUrl(node.url)
            this.props.actions.setPostData(node.params)
            this.setState({editor: node.params})
        }

        this.setState({cursor: node})
    }

    onFilterMouseUp(e) {
        const filter = e.target.value.trim()
        if (!filter) {
            return this.setState({data: this.treedata})
        }
        let filtered = filters.filterTree(this.treedata, filter)
        filtered = filters.expandFilteredNodes(filtered, filter)
        this.setState({data: filtered})
    }

    render() {
        const {data: stateData, cursor, editor} = this.state
        let testdata = ''
        const showResponseDialog = this.props.showRespDialog
        const showErrDialog = this.props.showErrDialog

        if(editor) {
            testdata = editor
        }

        return (
            <StyleRoot>
                <div style={styles.searchBox}>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="fa fa-search"/>
                        </span>
                        <input className="form-control"
                            onKeyUp={this.onFilterMouseUp.bind(this)}
                            placeholder="Search the tree..."
                            type="text"/>
                    </div>
                </div>
                <div style={styles.component}>
                    <Treebeard data={stateData}
                        decorators={decorators}
                        onToggle={this.onToggle}/>
                </div>
                <div style={styles.descview}>
                    <NodeViewer node={cursor}/>
                </div>
                <div style={styles.editview}>
                    <EditViewer data={testdata}/>
                </div>
                <div style={styles.submitbtn}>
                    <SubmitBtn />
                </div>
                {showResponseDialog ? <ResponseDialog /> : null}
                {showErrDialog ? <ErrorDialog /> : null}
            </StyleRoot>
        )
    }
}
