import {CALL_API} from './api'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ERROR_USERS = 'ERROR_USERS'
export const SELECT_USER = 'SELECT_USER'
export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'
export const ERROR_ISSUES = 'ERROR_ISSUES'

export const requestUsers = (q = '') => dispatch => {
  dispatch({
    type: REQUEST_USERS,
    q
  })
  return dispatch({
    [CALL_API]: {
      endpoint: `/search/users?q=${q}`,
      successType: RECEIVE_USERS,
      errorType: ERROR_USERS
    }
  })
}