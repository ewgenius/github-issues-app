import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestUsers, selectUser, requestIssues} from '../store/actions'
import AppShell from '../components/AppShell/AppShell.jsx'
import UserCard from '../components/UserCard/UserCard.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'
import AppBar from '../components/AppBar/AppBar.jsx'
import IssuesList from '../components/IssuesList/IssuesList.jsx'

function mapState(state) {
  return {
    users: state.users,
    user: state.user,
    loadingUsers: state.loadingUsers,
    issues: state.issues,
    loadingIssues: state.loadingIssues
  }
}

class App extends Component {
  componentDidMount() {
  }

  searchUsers(query) {
    if (query)
      this.props.dispatch(requestUsers(query))
  }

  selectUser(user) {
    this.props.dispatch(selectUser(user))
    this.props.dispatch(requestIssues(user.login))
  }

  render() {
    return <AppShell>
      <AppBar>
        <SearchBar
          items={this.props.users}
          placeholder='search user'
          loading={this.props.loadingUsers}
          value={this.props.user}
          onInput={query => this.searchUsers(query)}
          onSelect={user => this.selectUser(user)}
          valueRender={user => <UserCard small user={user}/>}
          />
      </AppBar>

      <UserCard user={this.props.user}/>

      <IssuesList
        issues={this.props.issues}
        />
    </AppShell>
  }
}

export default connect(mapState)(App)
