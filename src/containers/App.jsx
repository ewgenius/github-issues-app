import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestUsers, selectUser, requestProjects, selectProject, requestIssues, cleanAll} from '../store/actions'
import {push} from 'react-router-redux'

import AppShell from '../components/AppShell/AppShell.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'

function mapState(state) {
  return {
    users: state.store.users,
    user: state.store.user,
    loadingUsers: state.store.loadingUsers,
    projects: state.store.projects,
    project: state.store.project,
    loadingProjects: state.store.loadingProjects
  }
}

class App extends Component {
  searchUsers(q) {
    this.props.dispatch(requestUsers(q))
  }

  selectUser(user) {
    this.props.dispatch(selectUser(user))
    this.props.dispatch(requestProjects(user.login))
    this.props.dispatch(push(`/user/${user.login}`))
  }

  selectProject(project) {
    this.props.dispatch(selectProject(project))
    this.props.dispatch(push(`/user/${this.props.params.userLogin}/project/${project.name}`))
  }

  search() {
    if (this.props.user && this.props.project)
      this.props.dispatch(requestIssues(this.props.user.login, this.props.project.name))
  }

  render() {
    return <AppShell>
      <SearchBar
        user = {this.props.user}
        users = {this.props.users}
        project = {this.props.project}
        projects = {this.props.projects}
        loadingUsers = {this.props.loadingUsers}
        loadingProjects = {this.props.loadingProjects}
        searchUsers = {v => this.searchUsers(v) }
        selectUser = {v => this.selectUser(v) }
        selectProject = {v => this.selectProject(v) }
        onSearch = {() => this.search()}
        />
      {this.props.children}
    </AppShell>
  }
}

export default connect(mapState)(App)
