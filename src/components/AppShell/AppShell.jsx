import React, {Component} from 'react'
import './AppShell.scss'

export default class AppShell extends Component {
  render() {
    return <div className='app-shell'>
      {this.props.children}
    </div>
  }
}
