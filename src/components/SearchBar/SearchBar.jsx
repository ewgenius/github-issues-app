import React, {Component, PropTypes} from 'react'

export default class SearchBar extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    user: PropTypes.object,
    onInput: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  render() {
    const {users, user, onInput, onSelect} = this.props

    return <div className='search-bar'>
      <input type='text'/>
      <button></button>
    </div>
  }
}