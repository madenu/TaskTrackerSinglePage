import React from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, Label, Input} from 'reactstrap';
import server_api from '../server_api';

function TaskForm(props) {
  function update(ev) {
    console.log('event: ', ev)
    // TODO actually update
    let data = {};
    let action = {
      type: 'UPDATE_FORM',
      data: data
    };
    props.dispatch(action);
  }

  function submit(ev) {
    server_api.submit_post(props.form);
  }

  function clear(ev) {
    props.dispatch({type: 'CLEAR_FORM'});
  }

  let users = props.users.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)
  return <div>
    <h2>Create/Update Task</h2>
    <FormGroup>
      <Label for='title'>Task Title</Label>
      <Input tname='title' type='text' value={props.form.title} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for='user_id'>Assignee</Label>
      <Input tname='user_id' type='select' value={props.form.user_id} onChange={update}>
        {users}
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for='description'>Task Description</Label>
      <Input tname='description' type='textarea' value={props.form.description} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for='time_spent'>Time Spent</Label>
      <Input tname='time_spent' type='time' value={props.form.description} onChange={update}/>
    </FormGroup>
    <Button onClick={submit} className='btn btn-primary'>Submit</Button>
    &nbsp;
    <Button onClick={clear} className='btn btn-danger'>Clear</Button>
    &nbsp;
    <Button onClick={() => {}} className='btn btn-danger'>Cancel</Button>
  </div>;
}

function propsFromState(state) {
  return {form: state.form, users: state.users};
}

export default connect(propsFromState)(TaskForm);
