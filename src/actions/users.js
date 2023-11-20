export const types = {
  GET_USERS_REQUEST: "GET_USERS_REQUEST",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  CREATE_USER_REQUEST: "CREATE_USER_REQUEST",
  DELETE_USER_REQUEST: "DELETE_USER_REQUEST",
  USERS_ERROR: "USERS_ERROR",
};

export const getUsers = () => ({ type: types.GET_USERS_REQUEST });
export const getUsersSuccess = ({ items }) => ({
  type: types.GET_USERS_SUCCESS,
  payload: { items },
});

export const createUsersRequest = ({ firstName, lastName }) => ({
  type: types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName,
  },
});

export const deleteUserRequest = (userId) => ({
  type: types.DELETE_USER_REQUEST,
  payload: userId,
});

export const usersErrorAction = (error) => ({
  type: types.USERS_ERROR,
  payload: { error },
});
