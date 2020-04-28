import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchUsers } from './app/core/actions';

function App({ fetchUsers, users }) {

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <div>
      <h1>Titre</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(App);
