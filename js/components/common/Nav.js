import React, {Component} from 'react'
import LoadingButton from './LoadingButton'
import UserProfile from '../../containers/UserProfile.js'
import {Link} from 'react-router'

import {logout} from '../../actions/auth.js'
import {clearError} from '../../actions/error.js'

class Nav extends Component {
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
  }

  render () {
    let navButtons = this.props.loggedIn ? (
      <div>
        <Link to='/dashboard' className='btn btn--dash btn--nav'>Dashboard</Link>
        {this.props.currentlySending ? (
          <LoadingButton className='btn--nav' />
        ) : (
          <a href='#' className='btn btn--login btn--nav' onClick={this._logout}>Logout</a>
        )}
      </div>
    ) : (
      <div>
        <Link to='/register' className='btn btn--login btn--nav' onClick={this._clearError}>Register</Link>
        <Link to='/login' className='btn btn--login btn--nav' onClick={this._clearError}>Login</Link>
      </div>
    )

    return (
      <div className='nav'>
          {this.props.loggedIn ? <UserProfile /> : null}
          <div className='nav__wrapper'>
              <Link to='/' className='nav__logo-wrapper' onClick={this._clearError}>
                  <h1 className='nav__logo'>Login&nbsp;Flow</h1>
              </Link>
              {navButtons}
          </div>
      </div>
    )
  }

  _logout () {
    this.props.dispatch(logout())
  }

  _clearError () {
    this.props.dispatch(clearError())
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}

export default Nav
