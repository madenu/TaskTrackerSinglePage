import React from 'react'
import {connect} from 'react-redux'
import {Button, FormGroup, Label, Input} from 'reactstrap'
import server_api from '../server_api'

function TaskForm(props) {
  function update(ev) {
    let tgt = ev.target
    let data = {}
    data[tgt.name] = tgt.value
    let action = {
      type: 'UPDATE_FORM',
      data: data
    }
    props.dispatch(action)
  }

  function submit(ev) {
    console.log('TaskForm.submit_task()')
    server_api.submit_task(props.form)
  }

  function clear(ev) {
    props.dispatch({type: 'CLEAR_FORM'})
  }

  let users = props.users.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)
  return <div>
    <h2>Create/Update Task</h2>
    <FormGroup>
      <Label for='title'>Task Title</Label>
      <Input name='title' type='text' value={props.form.title} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for='user_id'>Assignee</Label>
      <Input name='user_id' type='select' value={props.form.user_id} onChange={update}>
        {users}
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for='description'>Task Description</Label>
      <Input name='description' type='textarea' value={props.form.description} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for='minutes_spent'>Time Spent</Label>
      <Input name='minutes_spent' type='number' onKeyDown={() => {}} step='15' value={props.form.minutes_spent} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label check>Complete?<Input type='checkbox' value={props.form.is_complete}/>
      </Label>
    </FormGroup>
    <Button onClick={submit} className='btn btn-primary'>Submit</Button>
    &nbsp;
    <Button onClick={clear} className='btn btn-danger'>Clear</Button>
    &nbsp;
    <Button onClick={() => {}} className='btn btn-danger'>Cancel</Button>
  </div>
}

function propsFromState(state) {
  return {form: state.form, users: state.users}
}

export default connect(propsFromState)(TaskForm)
