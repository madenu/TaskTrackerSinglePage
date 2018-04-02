import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function UserList(props) {
  function User(props) {
    return <p>{props.user.name}
      <Link to={"/users/" + props.user.id}> Tasks</Link>
    </p>
  }
  let users = props.users.map((user) => <User key={user.id} user={user}/>)
  return <div>
    {users}
  </div>
}

function propsFromState(state) {
  return {users: state.users};
}

export default connect(propsFromState)(UserList);
