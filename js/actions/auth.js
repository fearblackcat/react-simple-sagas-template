/**
 * Created by russell on 8/9/2017.
 */
import {
    CHANGE_FORM,
    SET_AUTH,
    SENDING_REQUEST,
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    LOGOUT,
    SET_USER_INFO,
} from '../constants/constants.js'

/**
 * Sets the form state
 * @param  {object} newFormState          The new state of the form
 * @param  {string} newFormState.username The new text of the username input field of the form
 * @param  {string} newFormState.password The new text of the password input field of the form
 */
export const changeForm = (newFormState) => ({
    type: CHANGE_FORM,
    newFormState,
})

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export const setAuthState = (newAuthState) => ({
    type: SET_AUTH,
    newAuthState,
})

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export const sendingRequest = (sending) => ({
    type: SENDING_REQUEST,
    sending,
})

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export const loginRequest = (data) => ({
    type: LOGIN_REQUEST,
    data,
})

/**
 * Tells the app we want to log out a user
 */
export const logout = () => ({
    type: LOGOUT,
})

/**
 * Tells the app we want to register a user
 * @param  {object} data          The data we're sending for registration
 * @param  {string} data.username The username of the user to register
 * @param  {string} data.password The password of the user to register
 */
export const registerRequest = (data) => ({
    type: REGISTER_REQUEST,
    data,
})

/**
 * Tells the app we want to set a user info
 * @param  {object} data          The data info user login
 * @param  {string} data.username The username of the login user
 */
export const setUserInfo = (userinfo) => ({
    type: SET_USER_INFO,
    userinfo,
})

