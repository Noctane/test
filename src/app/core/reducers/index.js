import { ADD_USER,DELETE_USER, RECEIVE_USERS, REQUEST_USERS, REQUEST_USERS_FAILED } from '../constants/actionTypes';

const initialState = {
  users: [],
  status: 'idle',
};

function rootReducer(state =  initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS: {
      return Object.assign({}, state, {
        status: 'success',
        users: state.users.concat(action.payload)
      });
    }
    case REQUEST_USERS: {
      return Object.assign({}, state, {
        status: 'pending',
      })
    }
    case REQUEST_USERS_FAILED: {
      return Object.assign({}, state, {
        status: 'failed',
      })
    }
    case ADD_USER: {
      const { name, address, company, email, phone, username, website } = action.payload;
      const newUser = {
        id: Date.now(),
        name,
        address,
        company,
        email,
        phone,
        username,
        website,
      }
      return {
        users: [...state.users, newUser]
      };
    }
    case DELETE_USER: {
      const userIdx = state.users.findIndex(u => u.id === action.id);
      const users = Object.assign([], state.users);
      users.splice(userIdx, 1);
      return Object.assign({}, state, {
        users: users,
      });
    }
    default:
      return state;
  }

}

export default rootReducer;