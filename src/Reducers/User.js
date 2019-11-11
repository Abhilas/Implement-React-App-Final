import {
  REGISTER_USER,
  CHECK_USERNAME,
  LOGIN_USER
} from "../Actions/actionTypes";

const INITIAL_STATE = {
  currentUser: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload.first_name
      };
    default:
      return state;
  }
};
