import React, {Component, PropTypes} from 'react'
import './UserCard.scss'

export default class UserCard extends Component {
  render() {
    const {user} = this.props
    if (user)
      return <div className={`user-card ${this.props.small ? 'small' : ''}`}>
        {user.avatar_url ? <img className='avatar' src={user.avatar_url}/> : null}
        <div className='name'>{this.props.user.login}</div>
      </div>
    else return null
  }
}
