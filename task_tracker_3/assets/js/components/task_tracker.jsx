import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import PostForm from './post-form';

export default function microblog_init() {
  let root = document.getElementById('root');
  ReactDOM.render(<TaskTracker />, root);
}

class TaskTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      users: [],
    };

    // this.request_tasks();
    // this.request_users();
  }
/*
  request_posts() {
    $.ajax("/api/v1/posts", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        this.setState(_.extend(this.state, { posts: resp.data }));
      },
    });
  }

  request_users() {
    $.ajax("/api/v1/users", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        this.setState(_.extend(this.state, { users: resp.data }));
      },
    });
  } */

  render() {
    return (
      <h1>TASK TRACKER GOES HERE</h1>
    );
  }
}
