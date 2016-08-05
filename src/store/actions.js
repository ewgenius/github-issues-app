import {CALL_API} from './api'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ERROR_USERS = 'ERROR_USERS'
export const SELECT_USER = 'SELECT_USER'
export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'
export const ERROR_ISSUES = 'ERROR_ISSUES'
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const ERROR_PROJECTS = 'ERROR_PROJECTS'

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

export const requestProjects = owner => dispatch => {
  dispatch({
    type: REQUEST_PROJECTS,
    owner
  })
  return dispatch({
    [CALL_API]: {
      endpoint: `/search/repositories?q=user:${owner}`,
      successType: RECEIVE_PROJECTS,
      errorType: ERROR_PROJECTS
    }
  })
}

export const selectUser = user => ({
  type: SELECT_USER,
  user
})

export const requestIssues = (author = '') => dispatch => {
  dispatch({
    type: REQUEST_ISSUES,
    author
  })
  return dispatch({
    [CALL_API]: {
      endpoint: `/search/issues?q=author:${author}`,
      successType: RECEIVE_ISSUES,
      errorType: ERROR_ISSUES
    }
  })
}
