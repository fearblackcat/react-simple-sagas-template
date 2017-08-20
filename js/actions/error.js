import {REQUEST_ERROR, CLEAR_ERROR} from '../constants/error.js'

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError (error) {
    return {type: REQUEST_ERROR, error}
}

/**
 * Sets the `error` state as empty
 */
export function clearError () {
    return {type: CLEAR_ERROR}
}