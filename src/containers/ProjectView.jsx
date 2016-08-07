import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestProject} from '../store/actions'

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
    if (next.props.user)
      if (!this.props.project || next.project.name !== next.params.projectName) {
        this.loadProject(next.params.userLogin, next.params.projectName)
      }
  }

  loadProject(login, name) {
    this.props.dispatch(requestProject(login, name))
  }

  render() {
    return <div>
      {this.props.issues.length}
    </div>
  }
}

export default connect(mapState)(ProjectView)
