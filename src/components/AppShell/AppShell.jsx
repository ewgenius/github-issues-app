import React, {Component} from 'react'
import './AppShell.scss'

import {Navbar, Grid} from 'react-bootstrap'

export default class AppShell extends Component {
  render() {
    return <div className='app-shell'>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Gihub issues app</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>

      <Grid>
        {this.props.children}
      </Grid>
    </div>
  }
}
