import React, { Component } from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import Select from 'react-select'

function userRender(user) {
  return <div className='select-user-option'>
    <img src={user.avatar_url}/>
    {user.login}
  </div>
}

export default class SearchBar extends Component {
  render() {
    return <div className='search-bar'>
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
            onInputChange={q => this.props.searchUsers(q)}
            onChange={v => this.props.selectUser(v)}
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
              onChange={v => this.props.selectProject(v)}
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
    </div>
  }
}
