import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestUsers, selectUser} from '../store/actions'

function mapState(state) {
  return {
    users: state.users,
    user: state.user,
    loadingUsers: state.loadingUsers
  }
}

class App extends Component {
  componentDidMount() {

  }

  render() {
    return <AppShell>
      {this.props.children}
    </AppShell>
  }
}

export default connect(mapState)(App)
