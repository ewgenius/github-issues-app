import React, {Component} from 'react'
import {connect} from 'react-redux'

import {requestUsers} from '../store/actions'

import AppShell from '../components/AppShell/AppShell.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'


function mapState(state) {
  return {
    users: state.users,
    user: state.user,
    loadingUsers: state.loadingUsers
  }
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(requestUsers('test'))
  }

  render() {
    return <div className='app'>
      <AppShell>
        <SearchBar
          users={this.props.users}
          loading={this.props.loadingUsers}
          selectedUser={this.props.user}
          onInput={query => console.log(query)}
          onSelect={user => console.log(user)}
          />
      </AppShell>
    </div>
  }
}

export default connect(mapState)(App)