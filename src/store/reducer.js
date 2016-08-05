import {
  REQUEST_USERS,
  RECEIVE_USERS,
  ERROR_USERS,
  SELECT_USER,
  REQUEST_ISSUES,
  RECEIVE_ISSUES,
  ERROR_ISSUES,
  REQUEST_PROJECTS,
  RECEIVE_PROJECTS,
  ERROR_PROJECTS,
  SELECT_PROJECT
} from './actions'

const initial = {
  users: [],
  user: null,
  loadingUsers: false,
  projects: [],
  project: null,
  loadingProjects: false,
  issues: [],
  loadingIssues: false
}

export default (state = initial, action) => {
  switch (action.type) {
    case REQUEST_USERS: {
      return {
        ...state,
        loadingUsers: true,
        users: []
      }
      break
    }
    case RECEIVE_USERS: {
      return {
        ...state,
        loadingUsers: false,
        users: action.payload.items
      }
      break
    }
    case ERROR_USERS: {
      return {
        ...state,
        loadingUsers: false,
        error: action.error
      }
      break
    }
    case REQUEST_PROJECTS: {
      return {
        ...state,
        loadingProjects: true,
        projects: []
      }
      break
    }
    case RECEIVE_PROJECTS: {
      return {
        ...state,
        loadingProjects: false,
        projects: action.payload.items
      }
      break
    }
    case SELECT_PROJECT: {
      return {
        ...state,
        project: action.project
      }
      break
    }
    case SELECT_USER: {
      return {
        ...state,
        user: action.user
      }
      break
    }
    case REQUEST_ISSUES: {
      return state
      break
    }
    case RECEIVE_ISSUES: {
      return state
      break
    }
    case ERROR_ISSUES: {
      return state
      break
    }
    default: {
      return state
    }
  }
}
