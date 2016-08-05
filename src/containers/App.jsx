import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestUsers, selectUser, requestProjects, selectProject, requestIssues} from '../store/actions'

import AppShell from '../components/AppShell/AppShell.jsx'
import UserCard from '../components/UserCard/UserCard.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'
import ProjectSelect from '../components/ProjectSelect/ProjectSelect.jsx'
import AppBar from '../components/AppBar/AppBar.jsx'
import IssuesList from '../components/IssuesList/IssuesList.jsx'

function mapState(state) {
  return {
    users: state.users,
    user: state.user,
    loadingUsers: state.loadingUsers,
    projects: state.projects,
    project: state.project,
    loadingProjects: state.loadingProjects,
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
    this.props.dispatch(requestProjects(user.login))
  }

  selectProject(project) {
    this.props.dispatch(selectProject(project))
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

      <ProjectSelect
        items={this.props.projects}
        value={this.props.project}
        placeholder='select project'
        loading={this.props.loadingProjects}
        onSelect={project => this.selectProject(project)}
        valueRender={project => <div>{project.name}</div>}
        />

      <IssuesList
        issues={this.props.issues}
        />
    </AppShell>
  }
}

export default connect(mapState)(App)
