import {
  createStore,
  combineReducers
} from 'redux'
import deepFreeze from 'deep-freeze'

/*
 *  state layout:
 *   {
 *    tasks: [... Tasks ...],
 *    users: [... Users ...],
 *    form: {
 *      description: '',
 *      is_completed: false,
 *      minutes_spent: 0,
 *      title: '',
 *      user_id: null
 *    }
 *   login_form {
 *      user_name: '',
 *      password: ''
 *   }
 *   token {
 *     user_id: '',
 *     token: ''
 *   }
 * }
 *
 * */

function tasks(state = [], action) {
  switch (action.type) {
    case 'TASKS_UPDATE':
      return [...action.tasks]
    case 'TASKS_ADD_ONE':
      return [action.task, ...state]
    default:
      return state
  }
}

function users(state = [], action) {
  switch (action.type) {
    case 'USERS_UPDATE':
      return [...action.users]
    case 'USERS_ADD_ONE':
      return [action.user, ...state]
    default:
      return state
  }
}

let empty_form = {
  description: '',
  is_completed: false,
  minutes_spent: 0,
  title: '',
  user_id: 1
}

let empty_login_form = {
  username: "",
  password: ""
}

function login_form(state = empty_login_form, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}

function token(state = null, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    default:
      return state;
  }
}

function form(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, action.data)
    case 'CLEAR_FORM':
      return empty_form
    case 'SET_TOKEN':
      return Object.assign({}, state, action.token)
    default:
      return state
  }
}

function root_reducer(state, action) {
  let reducer = combineReducers({
    tasks,
    users,
    form,
    login_form,
    token
  })
  state = reducer(state, action)
  return deepFreeze(state)
}

let store = createStore(root_reducer)
export default store
