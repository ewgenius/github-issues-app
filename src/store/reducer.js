import {
  REQUEST_USER,
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
  SELECT_PROJECT,
  CLEAN_ALL
} from './actions'

const initial = {
  users: [],
  user: null,
  loadingUsers: false,
  projects: [],
  project: null,
  loadingProjects: false,
  issues: [],
  loadingIssues: false,
  issuesLimit: 10,
  issuesPage: 1,
  issuesTotal: 0
}

export default (state = initial, action) => {
  switch (action.type) {
    case CLEAN_ALL: {
      return initial
      break
    }
    case REQUEST_USERS:
      {
        return {
          ...state,
          loadingUsers: true,
          users: []
        }
        break
      }
    case RECEIVE_USERS:
      {
        return {
          ...state,
          loadingUsers: false,
          users: action.payload.items
        }
        break
      }
    case ERROR_USERS:
      {
        return {
          ...state,
          loadingUsers: false,
          error: action.error
        }
        break
      }
    case REQUEST_PROJECTS:
      {
        return {
          ...state,
          loadingProjects: true,
          projects: []
        }
        break
      }
    case RECEIVE_PROJECTS:
      {
        return {
          ...state,
          loadingProjects: false,
          projects: action.payload.items
        }
        break
      }
    case SELECT_PROJECT:
      {
        return {
          ...state,
          project: action.payload,
          issuesTotal: 0,
          issues: []
        }
        break
      }
    case REQUEST_USER:
      {
        return {
          ...state,
          loadingUsers: true,
          issuesTotal: 0,
          issues: [],
          project: null,
          projects: []
        }
      }
    case SELECT_USER:
      {
        return {
          ...state,
          user: action.payload,
          loadingUsers: false,
        }
        break
      }
    case REQUEST_ISSUES:
      {
        return {
          ...state,
          loadingIssues: true,
          issuesLimit: action.limit,
          issuesPage: action.page,
          issuesTotal: 0,
          issues: []
        }
        break
      }
    case RECEIVE_ISSUES:
      {
        return {
          ...state,
          loadingIssues: false,
          issues: action.payload.items || action.payload,
          issuesTotal: action.pagination ? action.pagination.total || state.issuesTotal : 0
        }
        break
      }
    case ERROR_ISSUES:
      {
        return state
        break
      }
    default:
      {
        return state
      }
  }
}
