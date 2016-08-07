import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Router, Route, hashHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import reducer from './store/reducer'
import api from './store/api'
import App from './containers/App.jsx'

injectTapEventPlugin()

const root = document.getElementById('root')

const store = createStore(reducer, applyMiddleware(api, thunk))

const Dummy = props => <div>
  route dummy
  <br />
  {props.children}
</div>

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/user/:user' component={Dummy}>
          <Route path='/user/:user/projects/:project' component={Dummy}/>
        </Route>
      </Route>
    </Router>
  </Provider>, root)
