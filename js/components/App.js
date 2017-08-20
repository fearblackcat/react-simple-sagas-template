import React, {Component} from 'react'
import Nav from '../containers/Nav.js'

export default class App extends Component {
  render () {
    return (
        <div className="apppanel">
            <div className='wrapper'>
                <Nav loggedIn={this.props.data.loggedIn}
                    currentlySending={this.props.data.currentlySending}
                    history={this.props.history}
                    dispatch={this.props.dispatch}
                    location={this.props.location}
                />
                {this.props.children.props.location.pathname !== '/dashboard'? this.props.children : null}
            </div>
            {
              this.props.children.props.location.pathname === '/dashboard' ?
              <div className="content-panel">
                  {this.props.children}
              </div>: null
            }
        </div>
    )
  }
}

App.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  location: React.PropTypes.object,
  children: React.PropTypes.object,
  dispatch: React.PropTypes.func
}
