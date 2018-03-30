import React from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, Label, Input} from 'reactstrap';
import server_api from '../server_api';

function TaskForm(props) {
  function update(ev) {
    console.log('event: ', ev)
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
      <Label for='user_id'>User</Label>
      <Input tname='user_id' type='select' value={props.form.user_id} onChange={update}>
        {users}
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for='body'>Body</Label>
      <Input tname='body' type='textarea' value={props.form.body} onChange={update}/>
    </FormGroup>
    <Button onClick={submit} className='btn btn-primary'>Submit</Button>
    &nbsp;
    <Button onClick={clear} className='btn btn-danger'>Clear</Button>
  </div>;
}

function propsFromState(state) {
  return {form: state.form, users: state.users};
}

export default connect(propsFromState)(TaskForm);
