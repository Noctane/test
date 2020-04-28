import { RECEIVE_USERS, REQUEST_USERS } from '../constants/actionTypes';

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

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json(), err => console.log('err', err))
      .then(json => dispatch(receiveUsers(json)));
  }
}