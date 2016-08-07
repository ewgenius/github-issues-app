import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestUsers, selectUser} from '../store/actions'
import {push} from 'react-router-redux'

import AppShell from '../components/AppShell/AppShell.jsx'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import Select from 'react-select'

function mapState(state) {
  return {
    users: state.store.users,
    user: state.store.user,
    loading: state.store.loadingUsers
  }
}

class App extends Component {
  searchUsers(q) {
    this.props.dispatch(requestUsers(q))
  }

  selectUser(user) {
    console.log(user)
    this.props.dispatch(push(`/user/${user.id}`))
  }

  render() {
    return <AppShell>
      <Grid>
        <Row>
          <Col md={5}>
          <Select value={this.props.application}
            labelKey='login'
            valueKey='id'
            clearable={false}
            value={this.props.user}
            isLoading={this.props.loading}
            options={this.props.users}
            onInputChange={q => this.searchUsers(q)}
            onChange={v => this.selectUser(v)}
            />
          </Col>
          <Col md={5}>
            <Select
              disabled
              placeholder='select project'/>
          </Col>
          <Col md={2}>
            <Button bsStyle='primary' block>search</Button>
          </Col>
        </Row>
      </Grid>
      {this.props.children}
    </AppShell>
  }
}

export default connect(mapState)(App)
