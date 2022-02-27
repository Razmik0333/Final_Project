const ADD_USER = 'user/ADD_USER';
const LOGIN_USER = 'user/LOGIN_USER';

export const addUser = (payload) => ({ type: ADD_USER, payload });
export const loginUser = (payload) => ({ type: LOGIN_USER, payload });

const initialState = {
  user: { username: '', email: '', password: '' },
  users: [
    { username: 'Hayk', email: 'hayk@gmail.com', password: '1234' },
    { username: 'Alex', email: 'alex@gmail.com', password: '1234' },
  ],
};

const userDuck = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case LOGIN_USER:
      return {
        ...state,
        user: (state.users.find((user) => (
          user.username === payload.username && user.password === payload.password)) || state.user),
      };
    default:
      return state;
  }
};

export default userDuck;
