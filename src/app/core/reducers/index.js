import { RECEIVE_USERS, REQUEST_USERS } from '../constants/actionTypes';

const initialState = {
  users: [],
  isFetching: false,
};

function rootReducer(state =  initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS: {
      return Object.assign({}, state, {
        isFetching: false,
        users: state.users.concat(action.payload)
      });
    }
    case REQUEST_USERS: {
      return Object.assign({}, state, {
        isFetching: true,
      })
    }
    default:
      return state;
  }

}

export default rootReducer;