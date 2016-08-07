import React, {Component} from 'react'
import './IssuesList.scss'

export default class IssuesList extends Component {
  render() {
    const {issues} = this.props

    return <div className='issues-list'>
      {issues.length > 0
        ? <table className='table'>
            <thead>
              <tr>
                <th>№</th>
                <th>title</th>
                <th>created</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue, i) => <tr key={i}>
                <td>{issue.number}</td>
                <td>{issue.title}</td>
                <td>{issue.created_at}</td>
              </tr>)}
            </tbody>
          </table>
        : 'no issues'}
    </div>
  }
}
