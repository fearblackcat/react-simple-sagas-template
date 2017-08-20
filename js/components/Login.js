import React, {Component} from 'react'
import Form from './common/Form.js'

import {loginRequest} from '../actions/auth.js'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this._login = this._login.bind(this)
  }

  render () {
    let {dispatch} = this.props
    let {formState, currentlySending, error} = this.props.data

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Login</h2>
          </div>
          <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._login} btnText={'Login'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    )
  }

  _login (username, password) {
    this.props.dispatch(loginRequest({username, password}))
  }
}

Login.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

