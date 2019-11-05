import ServerAPI from "../API/JSONPlaceHolder";
import History from "../AppRoute/history";
import { REGISTER_USER, CHECK_USERNAME } from "./actionTypes";

export const registerUser = userDetails => {
  return async dispatch => {
    const response = await ServerAPI.post("/users", userDetails);

    dispatch({
      type: REGISTER_USER,
      payload: response
    });

    History.push("/login");
  };
};

export const loginUser = userDetails => {
  return async dispatch => {
    const response = await ServerAPI.get("/users");

    dispatch({
      type: REGISTER_USER,
      payload: response
    });
  };
};
