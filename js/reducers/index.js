/*
 * The reducer takes care of state changes in our app through actions
 */
import { combineReducers } from 'redux'
import auth from './auth.js'
import treeview from './treeview.js'

const rootReducer = combineReducers({
    auth,
    treeview,
})


export default rootReducer
