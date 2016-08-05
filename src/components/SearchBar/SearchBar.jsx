import React, {Component, PropTypes} from 'react'
import Icon from '../Icon/Icon.jsx'
import './SearchBar.scss'

export default class SearchBar extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    user: PropTypes.object,
    loading: PropTypes.bool,
    onInput: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  state = {
    showList: false
  }

  componentWillReceiveProps(next) {
    if (this.props.users.length !== next.users.length) {
      this.setState({
        showList: true
      })
    }
  }

  selectUser(user) {
    this.setState({
      showList: false
    })
    this.props.onSelect(user)
  }

  render() {
    const {users, user, onInput, onSelect} = this.props

    return <div className='search-bar'>
      <Icon icon='search'/>
      <input className='search-input' type='text' onChange={e => this.props.onInput(e.target.value)}/>
      { this.props.loading ? <div className='spinner'>x</div> : null }
      { this.state.showList ? <div className='users-list'>
        {this.props.users.map((user, i) =>
          <div className='user-item' key={i} onClick={() => this.selectUser(user)}>{user.login}</div>
        )}
      </div> : null }
    </div>
  }
}
