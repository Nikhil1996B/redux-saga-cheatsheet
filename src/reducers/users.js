import { types } from "../actions/users";

const INITIAL_STATE = {
  items: [],
  error: null,
};
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return { ...state, items: action.payload.items };
    case types.USERS_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
