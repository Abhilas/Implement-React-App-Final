import { REGISTER_USER, CHECK_USERNAME } from "../Actions/actionTypes";

const INITIAL_STATE = {
  counter: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};
