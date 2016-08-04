import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './store/reducer'
import api from './store/api'
import App from './containers/App.jsx'

const root = document.getElementById('root')

const store = createStore(reducer, applyMiddleware(api, thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>, root)