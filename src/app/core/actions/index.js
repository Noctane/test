import { ADD_USER, DELETE_USER, RECEIVE_USERS, REQUEST_USERS, REQUEST_USERS_FAILED } from '../constants/actionTypes';

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload,
  }
}

export function deleteUser(id) {
  console.log('id', id);
  return {
    type: DELETE_USER,
    id,
  }
}

export function receiveUsers(payload) {
  return {
    type: RECEIVE_USERS,
    payload,
  }
}

export function requestUsers() {
  return {
    type: REQUEST_USERS,
  }
}
export function requestUsersFailed() {
  return {
    type: REQUEST_USERS_FAILED,
  }
}

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json(), err => {
        dispatch(requestUsersFailed())
        console.log('err', err)
      })
      .then(json => dispatch(receiveUsers(json)));
  }
}