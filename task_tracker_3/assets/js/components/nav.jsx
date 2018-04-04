import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';
import {Form, Button, FormGroup, NavItem, Input} from 'reactstrap'
import server_api from '../server_api'

function LoginForm(props) {
  function update(ev) {
    let tgt = ev.target
    let data = {}
    data[tgt.name] = tgt.value
    let action = {
      type: 'UPDATE_LOGIN_FORM',
      data: data
    }
    props.dispatch(action)
  }

  function create_token(_ev) {
    server_api.submit_login(props.login_form)
  }

  return (<div className="navbar-text">
    <Form inline>
      <FormGroup>
        <Input type="text" name="username" placeholder="username" value={props.login_form.username} onChange={update}/>
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" placeholder="password" value={props.login_form.password} onChange={update}/>
      </FormGroup>
      <Button onClick={create_token}>Log In</Button>
    </Form>
  </div>)
}

function Session(props) {
  return <div className="navbar-text">USER ID = {props.token.user_id}</div>
}

function Nav(props) {
  let session_info = null;

  if (props.token) {
    session_info = <Session token={props.token}/>
  } else {
    session_info = LoginForm(props)
  }

  return (<nav className='navbar navbar-dark bg-dark navbar-expand'>
    <ul className='navbar-nav mr-auto'>
      <NavItem>
        <NavLink to='/' exact={true} activeClassName='active' className='nav-link'>Tasks Feed</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/users' href='#' className='nav-link'>All Users</NavLink>
      </NavItem>
    </ul>
    {session_info}
  </nav>)
}

function propsFromState(state) {
  return {token: state.token, login_form: state.login_form}
}

export default connect(propsFromState)(Nav)
