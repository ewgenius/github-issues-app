import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestUser, selectUser, requestProjects} from '../store/actions'

function mapState(state) {
  return {
    user: state.store.user
  }
}

class UserView extends Component {
  componentDidMount() {
    if (!this.props.user) {
      this.loadUser(this.props.params.userLogin)
    }
  }

  componentWillReceiveProps(next) {
    if (!this.props.user && !next.user || this.props.user && this.props.user.login !== next.params.userLogin) {
      this.loadUser(next.params.userLogin)
    }
  }

  loadUser(login) {
    this.props.dispatch(requestUser(login))
      .then(action => {
        if (action.payload)
          this.props.dispatch(requestProjects(action.payload.login))
      })
  }

  render() {
    return <div>
      {this.props.children}
    </div>
  }
}

export default connect(mapState)(UserView)
