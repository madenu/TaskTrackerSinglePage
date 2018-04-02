import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import store from '../store'

import Nav from './nav'
import TaskForm from './task_form'
import TaskFeed from './task_feed'
import UserList from './user_list'

export default function microblog_init() {
  let root = document.getElementById('root')
  ReactDOM.render(<Provider store={store}>
    <TaskTracker/>
  </Provider>, root)
}

function TaskTracker() {
  return (<Router>
    <div>
      <Nav/>
      <Route path='/' exact={true} render={() => <TaskForm/>}/>
      <Route path='/' exact={true} render={() => <TaskFeed/>}/>
      <Route path='/users' exact={true} render={() => <UserList/>}/>
      <Route path='/users/:user_id' render={({match}) => <div>
          <TaskForm/>
          <TaskFeed filtered={store.getState().tasks.filter(task => task.user.id == match.params.user_id)}/>
        </div>}/>
    </div>
  </Router>)
}
