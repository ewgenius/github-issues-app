import React, {Component} from 'react'
import './App.scss'

import iconSearch from '../../../bower_components/material-design-icons/action/svg/production/ic_search_24px.svg'

import SearchBar from '../SearchBar/SearchBar.jsx' 

export default class App extends Component {
  render() {
    return <div className='app'>
      <div className='appbar'>
        <SearchBar
          users={[]}
          selectedUser={{}}
          onInput={query => console.log(query)}
          onSelect={user => console.log(user)}
          />
      </div>
      <div className='issues-list'>
        
      </div>
    </div>
  }
}