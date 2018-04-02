import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './nav';
import TaskForm from './task_form'
import TaskFeed from './task_feed'
import UserList from './user_list'

export default function microblog_init(store) {
  let root = document.getElementById('root');
  ReactDOM.render(<Provider store={store}>
    <TaskTracker/>
  </Provider>, root);
}

function TaskTracker() {
  return (<Router>
    <div>
      <Nav/>
      <Route path='/' exact={true} render={() => <TaskForm/>}/>
      <Route path='/' exact={true} render={() => <TaskFeed/>}/>
      <Route path='/users' exact={true} render={() => <UserList/>}/>
      <Route path='/users/:user_id' exact={true} render={() => <h1>TASKS FOR USER ID</h1>}/>
    </div>
  </Router>);
}
