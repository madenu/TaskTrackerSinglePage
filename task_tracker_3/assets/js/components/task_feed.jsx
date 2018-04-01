import React from 'react';
import {connect} from 'react-redux';
import {Card, CardBody} from 'reactstrap';

function TaskFeed(props) {

  // TODO map each task to a card
  // TODO render task.is_completed
  console.log("props.tasks: ", props.tasks)
  let tasks = props.tasks.map((task) => <Card key={task.id}>
    <CardBody>
      <h3>{task.title}</h3>
      <h4>{task.user.name}</h4>
      <p>{task.description}</p>
      <time>{task.time_spent}</time>
    </CardBody>
  </Card>)

  return <div>{tasks}</div>
}

function propsFromState(state) {
  return {tasks: state.tasks};
}

export default connect(propsFromState)(TaskFeed);
