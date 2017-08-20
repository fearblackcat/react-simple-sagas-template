/**
 * Created by russell on 8/9/2017.
 */
import {
    CHANGE_FORM,
    SET_AUTH,
    SENDING_REQUEST,
    SET_USER_INFO,
} from '../constants/constants.js'
import {Map} from 'immutable'

import {REQUEST_ERROR, CLEAR_ERROR} from '../constants/error.js'
import auth from '../auth'

// The initial application state
const initialState = Map({
    formState: {
        username: '',
        password: ''
    },
    error: '',
    userinfo: '',
    currentlySending: false,
    loggedIn: auth.loggedIn()
})

// Takes care of changing the application state
export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_FORM:
            return state.set('formState', action.newFormState)
        case SET_AUTH:
            return state.set('loggedIn', action.newAuthState)
        case SENDING_REQUEST:
            return state.set('currentlySending', action.sending)
        case REQUEST_ERROR:
            return state.set('error', action.error)
        case CLEAR_ERROR:
            return state.set('error', '')
        case SET_USER_INFO:
            return state.set('userinfo', action.userinfo)
        default:
            return state
    }
}