import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './nav';
import TaskForm from './task_form'

export default function microblog_init(store) {
  let root = document.getElementById('root');
  ReactDOM.render(<Provider store={store}>
    <TaskTracker state={store.getState()}/>
  </Provider>, root);
}

function TaskTracker() {
  return (<Router>
    <div>
      <Nav/>
      <h1>TASK TRACKER</h1>
      <Route path='/' exact={true} render={() => <TaskForm />}/>
      <Route path='/' exact={true} render={() => <h1>TASKS FEED</h1>}/>
      <Route path='/users' exact={true} render={() => <h1>ALL USERS</h1>}/>
    </div>
  </Router>);
}
