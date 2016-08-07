import {CALL_API} from './api'

export const REQUEST_USERS = 'REQUEST_USERS'
export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ERROR_USERS = 'ERROR_USERS'
export const SELECT_USER = 'SELECT_USER'
export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'
export const ERROR_ISSUES = 'ERROR_ISSUES'
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const ERROR_PROJECTS = 'ERROR_PROJECTS'
export const SELECT_PROJECT = 'SELECT_PROJECT'


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

export const requestUser = name => dispatch => {
  dispatch({
    type: REQUEST_USER,
    name
  })
  return dispatch({
    [CALL_API]: {
      endpoint: `/users/${name}`,
      successType: SELECT_USER,
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

export const requestProject = (owner, name) => dispatch => {
  dispatch({
    type: REQUEST_PROJECT,
    owner,
    name
  })
  return dispatch({
    [CALL_API]: {
      endpoint: `/repos/${owner}/${name}`,
      successType: SELECT_PROJECT,
      errorType: ERROR_PROJECTS
    }
  })
}

export const selectUser = user => ({
  type: SELECT_USER,
  payload: user
})

export const requestIssues = (author = '') => dispatch => {
  dispatch({
    type: REQUEST_ISSUES,
    payload: author
  })
  return dispatch({
    [CALL_API]: {
      endpoint: `/search/issues?q=author:${author}`,
      successType: RECEIVE_ISSUES,
      errorType: ERROR_ISSUES
    }
  })
}

export const selectProject = project => ({
  type: SELECT_PROJECT,
  payload: project
})
