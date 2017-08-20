/**
 * Created by russell on 8/12/2017.
 */
import { SET_URL, SET_POST_DATA, SHOW_RESP_DIALOG, HIDE_RESP_DIALOG, SHOW_ERROR_DIALOG, HIDE_ERROR_DIALOG } from '../constants/constants.js'
import {Map} from 'immutable'

// The initial application state
const initialState = Map({
    request_url: '',
    post_data: '',
    showRespDialog: false,
    showErrDialog: false,
    responseResult: '',
    error_data: '',
})

// Takes care of changing the application state
export default function treeviewReducer (state = initialState, action) {
    switch (action.type) {
        case SET_URL:
            return state.set('request_url', action.request_url)
        case SET_POST_DATA:
            return state.set('post_data', action.post_data)
        case SHOW_RESP_DIALOG:
            return state.set('showRespDialog', true).set('responseResult', action.responseData)
        case HIDE_RESP_DIALOG:
            return state.set('showRespDialog', false)
        case SHOW_ERROR_DIALOG:
            return state.set('showErrDialog', true).set('error_data', action.errMsg)
        case HIDE_ERROR_DIALOG:
            return state.set('showErrDialog', false)
        default:
            return state
    }
}