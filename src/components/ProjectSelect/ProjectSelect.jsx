import React, {Component, PropTypes} from 'react'
import Icon from '../Icon/Icon.jsx'
import './ProjectSelect.scss'

export default class ProjectSelect extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    value: PropTypes.object,
    placeholder: PropTypes.string.isRequired,
    valueRender: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  state = {
    showList: false
  }

  openList() {
    this.setState({
      showList: true
    })
  }

  selectItem(item) {
    this.setState({
      showList: false
    })
    this.props.onSelect(item)
  }

  render() {
    const {items, value, loading, valueRender, placeholder} = this.props

    return <div className='project-select'>
      <div className='value-container' onClick={() => this.openList()}>
        <Icon icon='arrow_drop_down'/>
        <div className='value'>
          {
            value ? valueRender(value) : <div className='placeholder'>{placeholder}</div>
          }
        </div>
      </div>
      {
        this.state.showList ? <div className='list'>
          {items.map((item, i) => <div
            key={i}
            className='item'
            onClick={() => this.selectItem(item)}>
              {valueRender(item)}
            </div>)}
        </div> : null
      }
    </div>
  }
}
