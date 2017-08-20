/**
 * Created by russell on 8/12/2017.
 */

import {
    SET_URL,
    SET_POST_DATA,
    TRIGGER_POST,
    SHOW_RESP_DIALOG,
    HIDE_RESP_DIALOG,
    SHOW_ERROR_DIALOG,
    HIDE_ERROR_DIALOG,
} from '../constants/constants.js'

/**
 * Sets the tree state
 * @param  {object} request_url          The url of request on click tree
 */
export const setReqUrl = (request_url) => ({
    type: SET_URL,
    request_url,
})

/**
 * Sets the edit view state
 * @param  {object} post_data          The post data of request on edit view
 */
export const setPostData = (post_data) => ({
    type: SET_POST_DATA,
    post_data,
})


/**
 * Post data through submit button
 * @param  {object} url          The post url of click tree view
 * @param  {object} data         The post data of edit view
 */
export const requestForAction = (url,data) => ({
    type: TRIGGER_POST,
    url,
    data,
})

/**
 * show response data through dialog
 * @param  {object} responseData       The post url of click tree view
 */
export const showResponse = (responseData) => ({
    type: SHOW_RESP_DIALOG,
    responseData,
})

/**
 * hide response dialog
 */
export const HideResponseDialog = () => ({
    type: HIDE_RESP_DIALOG,
})

/**
 * show response data through dialog
 * @param  {object} errMsg       The error message of tree view
 */
export const showError = (errMsg) => ({
    type: SHOW_ERROR_DIALOG,
    errMsg,
})

/**
 * hide error dialog
 */
export const HideErrorDialog = () => ({
    type: HIDE_ERROR_DIALOG,
})