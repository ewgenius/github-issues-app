import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, combineReducers,} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Router, Route, hashHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux'
import reducer from './store/reducer'
import api from './store/api'
import createLogger from 'redux-logger'

import App from './containers/App.jsx'
import UserView from './containers/UserView.jsx'

const root = document.getElementById('root')
const logger = createLogger()
const routeMiddleware = routerMiddleware(hashHistory)

const store = createStore(combineReducers({
  store: reducer,
  routing: routerReducer
}), applyMiddleware(
  api,
  thunk,
  routeMiddleware,
  logger
))
const history = syncHistoryWithStore(hashHistory, store)

const Dummy = props => <div>
  route dummy
  <br/> {props.children}
</div>

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <Route path='/user/:userLogin' component={UserView}>
          <Route path='/user/:userLogin/project/:projectId' component={Dummy}/>
        </Route>
      </Route>
    </Router>
  </Provider>, root)
