import React from 'react';
import {connect} from 'react-redux';
import {Card, CardBody} from 'reactstrap';

function TaskFeed(props) {

  // TODO render task.is_completed
  let tasks = props.tasks.map((task) => <Card key={task.id} onClick={() => {
    props.dispatch({type: "UPDATE_FORM", data: task})
    window.scrollTo(0,0)}
  } >
    <CardBody>
      <h3>{task.title}</h3>
      <h4>{task.user.name}</h4>
      <p>{task.description}</p>
      <time>{task.minutes_spent}</time>
    </CardBody>
  </Card>)

  return <div>{tasks}</div>
}

function propsFromState(state) {
  return {tasks: state.tasks};
}

export default connect(propsFromState)(TaskFeed);
