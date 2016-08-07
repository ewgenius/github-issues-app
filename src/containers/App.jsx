import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestUsers, selectUser, requestProjects, selectProject} from '../store/actions'
import {push} from 'react-router-redux'

import AppShell from '../components/AppShell/AppShell.jsx'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import Select from 'react-select'

function userRender(user) {
  return <div className='select-user-option'>
    <img src={user.avatar_url}/>
    {user.login}
  </div>
}

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
    this.props.dispatch(push(`/user/${this.props.params.userLogin}/project/${project.id}`))
  }

  render() {
    return <AppShell>
      <Grid>
        <Row>
          <Col md={5}>
          <Select
            value={this.props.user}
            placeholder='select user'
            labelKey='login'
            valueKey='login'
            clearable={false}
            isLoading={this.props.loadingUsers}
            options={this.props.users}
            onInputChange={q => this.searchUsers(q)}
            onChange={v => this.selectUser(v)}
            valueRenderer={userRender}
            optionRenderer={userRender}
            />
          </Col>
          <Col md={5}>
            <Select
              value={this.props.project}
              placeholder='select project'
              labelKey='name'
              valueKey='id'
              clearable={false}
              disabled={this.props.user === null}
              isLoading={this.props.loadingProjects}
              options={this.props.projects}
              onChange={v => this.selectProject(v)}
              />
          </Col>
          <Col md={2}>
            <Button
              bsStyle='primary'
              block
              disabled={this.props.user === null}
              >search</Button>
          </Col>
        </Row>
      </Grid>
      {this.props.children}
    </AppShell>
  }
}

export default connect(mapState)(App)
