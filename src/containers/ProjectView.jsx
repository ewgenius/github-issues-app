import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestProject, requestIssues} from '../store/actions'
import Spinner from 'react-activity/lib/Spinner'

function mapState(state) {
  return {
    user: state.store.user,
    project: state.store.project,
    issues: state.store.issues,
    loadingIssues: state.store.loadingIssues
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
    if (next.user)
      if (!this.props.project || next.project.name !== next.params.projectName) {
        console.log(next.project, next.params)
        this.loadProject(next.params.userLogin, next.params.projectName)
      }
  }

  loadProject(owner, name) {
    this.props.dispatch(requestProject(owner, name))
    .then(action => {
      this.props.dispatch(requestIssues(owner, name))
    })
  }

  render() {
    return <div>
      {this.props.loadingIssues ? <Spinner className='spinner' /> : null}
    </div>
  }
}

export default connect(mapState)(ProjectView)
