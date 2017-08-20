/**
 * Created by russell on 8/9/2017.
 */
// Mostly boilerplate, except for the routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
import 'babel-polyfill'

import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'

import App from '../containers/App.js'
import Home from '../containers/Home.js'
import Login from '../containers/Login.js'
import Register from '../containers/Register.js'
import Dashboard from '../containers/Dashboard.js'
import NotFound from '../components/NotFound.js'

import reducer from '../reducers'
import rootSaga from '../sagas'
import {clearError} from '../actions/error.js'

import '../styles/main.css'

let logger = createLogger({
    // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
    predicate: (getState, action) => action.type !== 'CHANGE_FORM'
})

let sagaMiddleware = createSagaMiddleware()

// Creates the Redux store using our reducer and the logger and saga middlewares
let store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
// We run the root saga automatically
sagaMiddleware.run(rootSaga)

/**
 * Checks authentication status on route change
 * @param  {object}   nextState The state we want to change into when we change routes
 * @param  {function} replace Function provided by React Router to replace the location
 */
function checkAuth (nextState, replace) {
    let loggedIn = store.getState().auth.get('loggedIn')

    store.dispatch(clearError())

    // Check if the path isn't dashboard. That way we can apply specific logic to
    // display/render the path we want to
    if (nextState.location.pathname !== '/dashboard') {
        if (loggedIn) {
            if (nextState.location.state && nextState.location.pathname) {
                replace(nextState.location.pathname)
            } else {
                replace('/')
            }
        }
    } else {
        // If the user is already logged in, forward them to the homepage
        if (!loggedIn) {
            if (nextState.location.state && nextState.location.pathname) {
                replace(nextState.location.pathname)
            } else {
                replace('/')
            }
        }
    }
}

export default class LoginFlow extends Component {
    render () {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route component={App}>
                        <Route path='/' component={Home} />
                        <Route onEnter={checkAuth}>
                            <Route path='/login' component={Login} />
                            <Route path='/register' component={Register} />
                            <Route path='/dashboard' component={Dashboard} />
                        </Route>
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}
