import ServerAPI from "../API/JSONPlaceHolder";
import History from "../AppRoute/history";
import {
  REGISTER_USER,
  CHECK_USERNAME,
  LOGIN_USER,
  LOGIN_ERROR
} from "./actionTypes";

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
  console.log("userDetails from Login ==> ", userDetails);
  return async dispatch => {
    const response = await getAllUsers();

    console.log("all Users ==> ", response);

    const reqUser = response.data.filter(eachUser => {
      return (
        eachUser.username === userDetails.username &&
        eachUser.password === userDetails.password
      );
    });

    if (reqUser.length > 0) {
      dispatch({
        type: LOGIN_USER,
        payload: reqUser[0]
      });
      History.push("/");
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: "Wrong username & password !!!"
      });
    }
  };
};

export const getAllUsers = () => {
  return ServerAPI.get("/users");
};
