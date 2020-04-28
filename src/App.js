import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, addUser, deleteUser } from './app/core/actions';
import PropTypes from 'prop-types';
// Components
import UserCard from './app/components/UserCard';
import Spinner from './app/components/Spinner';
import Filters from './app/components/Filters';
import Modal from './app/components/Modal';
// Styles
import './styles.css';

function App({ fetchUsers, users, status, addUser, deleteUser }) {

  const [userList, setUserList] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [newUser, setNewUser] = useState({});


  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    setUserList(users);
  }, [users, setUserList])

  const onFilterInputChange = (e) => {
    let filteredUsers =  users;
    const query = e.target.value.toLowerCase();
    if (query !== '' || query !== undefined) {
      filteredUsers = filteredUsers.filter(u => {
        let searchValue;
        if (e.target.name === 'company') {
          searchValue = u.company.name.toLowerCase();
        } else if (e.target.name === 'city') {
          searchValue = u.address.city.toLowerCase();
        } else {
          searchValue = u[e.target.name].toLowerCase();
        }
        return filteredUsers = searchValue.indexOf(query) !== -1;
      });
    }
    setUserList(filteredUsers);
  }

  const onInputChange = (e) => {
    console.log('e.target.name, e.target.value', e.target.name, e.target.value);
  }

  const toggleModal = () => {
    setIsOpened(isOpened => !isOpened)
  }

  if (status === 'idle') {
    return (
      <div className="container">
        <h1 className="text-center">User list</h1>
        <button type="button" onClick={() => fetchUsers()} className="btn btn-primary">Charger les utilisateurs</button>
      </div>
    )
  }

  if (status === 'pending') {
    return <Spinner />;
  }

  if (status === 'success') {
    return (
      <div className="container">
        <h1 className="text-center mb-5">User list</h1>
        <div className="row">
          <div className="col">
            <Filters onInputChange={onFilterInputChange} />
          </div>
          <div className="col">
            <div className="text-right">
              <button type="button" onClick={toggleModal} className="btn btn-primary">Ajouter</button>
            </div>
          </div>
        </div>

        <ul className="user-list">
          {userList.map(u => (
            <UserCard key={u.id} user={u} onClickBtn={() => deleteUser(u.id)} />
          ))}
        </ul>

        <Modal isOpened={isOpened} toggleModal={toggleModal}>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Nom</label>
                <input onChange={onInputChange} type="text" className="form-control" name="name"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input onChange={onInputChange} type="email" className="form-control" name="email"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Adresse</label>
              <input onChange={onInputChange} type="text" className="form-control" name="address" placeholder="1234 Main St"/>
            </div>
            <div className="form-group">
              <label htmlFor="company">Compagnie</label>
              <input onChange={onInputChange} type="text" className="form-control" name="company" placeholder="Human's Connexion"/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input onChange={onInputChange} type="text" className="form-control" name="phone" placeholder="06 ..."/>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={onInputChange} type="text" className="form-control" name="username" placeholder="Toto"/>
            </div>
            <div className="form-group">
              <label htmlFor="website">Site internet</label>
              <input onChange={onInputChange} type="text" className="form-control" name="website" placeholder="http://www.google.com"/>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    status: state.status,
  }
}

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, { fetchUsers, addUser, deleteUser })(App);
