import React, {Component, PropTypes} from 'react'
import Icon from '../Icon/Icon.jsx'
import './SearchBar.scss'

export default class SearchBar extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    value: PropTypes.object,
    placeholder: PropTypes.string,
    loading: PropTypes.bool,
    onInput: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    valueRender: PropTypes.func.isRequired
  }

  state = {
    showList: false
  }

  componentWillReceiveProps(next) {
    if (this.props.items.length !== next.items.length) {
      this.setState({
        showList: true
      })
    }
  }

  selectItem(value) {
    this.setState({
      showList: false
    })
    this.props.onSelect(value)
  }

  render() {
    const {items, placeholder, value, onInput, onSelect, valueRender} = this.props

    return <div className='search-bar'>
      <Icon icon='search'/>
      <input placeholder={placeholder} className='search-input' type='text' onChange={e => this.props.onInput(e.target.value)}/>
      { this.props.loading ? <div className='spinner'>x</div> : null }
      { this.state.showList ? <div className='items-list'>
        {this.props.items.map((item, i) =>
          <div className='item' key={i} onClick={() => this.selectItem(item)}>{valueRender(item)}</div>
        )}
      </div> : null }
    </div>
  }
}
