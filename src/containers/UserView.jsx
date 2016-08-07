import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestUser, selectUser} from '../store/actions'

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
    if (!this.props.user || next.user.login !== next.params.userLogin) {
      this.loadUser(next.params.userLogin)
    }
  }

  loadUser(login) {
    this.props.dispatch(requestUser(login))
  }

  render() {
    return <div>

      {this.props.children}
    </div>
  }
}

export default connect(mapState)(UserView)
