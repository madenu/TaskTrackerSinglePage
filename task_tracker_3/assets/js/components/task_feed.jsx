import React from 'react'
import {connect} from 'react-redux'
import {Card, CardBody} from 'reactstrap'

function TaskFeed(props) {

  let tasks = null
  if (props.filtered) {
    tasks = props.filtered
  } else {
    tasks = props.tasks
  }

  console.log("tasks: ", tasks)
  tasks = tasks.map(task => <Card key={task.id} onClick={() => {
      console.log('task: ', task)
      let data = Object.assign({}, task, {user_id: task.user.id})
      props.dispatch({type: "UPDATE_FORM", data: data})
      window.scrollTo(0, 0)
    }}>
    <CardBody>
      <h3>{task.title}</h3>
      <h4>{task.user.name}</h4>
      <p>{task.description}</p>
      <time>{task.minutes_spent}</time>
    </CardBody>
  </Card>)
  console.log("tasks: ", tasks)

  return <div>{tasks}</div>
}

function propsFromState(state) {
  return {tasks: state.tasks}
}

export default connect(propsFromState)(TaskFeed)
