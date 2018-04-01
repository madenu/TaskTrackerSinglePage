import {
  createStore,
  combineReducers
} from 'redux'
import deepFreeze from 'deep-freeze'

/*
 *  state layout:
 *  {
 *   tasks: [... Tasks ...],
 *   users: [... Users ...],
 *   form: {
 *     description: '',
 *     is_completed: false,
 *     time_spent: 0,
 *     title: '',
 *     user_id: null
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
  time_spent: 0,
  title: '',
  user_id: ''
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
  console.log('reducer', action)
  // {posts, users, form} is ES6 shorthand for
  // {posts: posts, users: users, form: form}
  let reducer = combineReducers({
    tasks,
    users,
    form
  })
  state = reducer(state, action)
  console.log('state', state)
  return deepFreeze(state)
}

let store = createStore(root_reducer)
export default store
