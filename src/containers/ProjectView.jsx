import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestProject, requestIssues} from '../store/actions'

import Spinner from 'react-activity/lib/Spinner'
import IssuesList from '../components/IssuesList/IssuesList.jsx'
import Paginator from '../components/Paginator/Paginator.jsx'

function mapState(state) {
  return {
    user: state.store.user,
    project: state.store.project,
    issues: state.store.issues,
    loadingIssues: state.store.loadingIssues,
    page: state.store.issuesPage,
    total: state.store.issuesTotal,
    limit: state.store.issuesLimit
  }
}

class ProjectView extends Component {
  componentDidMount() {
    if (this.props.user)
      if (!this.props.project && this.props.user) {
        this.loadProject(this.props.params.userLogin, this.props.params.projectName)
      }
  }

  componentWillReceiveProps(next) {
    if (!this.props.user && next.user && next.project) {
      this.loadProject(next.params.userLogin, next.params.projectName)
    }

    if (next.user)
      if (
        !this.props.user
        //next.project.name !== next.params.projectName ||
        //this.props.project && this.props.project.name !== next.params.projectName
      ) {
        this.loadProject(next.params.userLogin, next.params.projectName)
      }
  }

  loadProject(owner, name) {
    return this.props.dispatch(requestProject(owner, name))
      .then(action => {
        this.loadIssues(this.props.params.userLogin, this.props.params.projectName)
      })
  }

  loadIssues(owner, name, page, limit = this.props.limit) {
    return this.props.dispatch(requestIssues(owner, name, page, limit))
  }

  render() {
    return <div>
      {this.props.loadingIssues ? <Spinner className='spinner' /> : <div>
        <IssuesList issues={this.props.issues}/>

        <Paginator
          page={this.props.page}
          total={this.props.total}
          limit={this.props.limit}
          goTo={page => this.loadIssues(this.props.params.userLogin, this.props.params.projectName, page)}
          goToLimit={(page, limit) => this.loadIssues(this.props.params.userLogin, this.props.params.projectName, page, limit)}
        />
      </div>}
    </div>
  }
}

export default connect(mapState)(ProjectView)
