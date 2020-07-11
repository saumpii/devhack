import Axios from "axios";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/user/login", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const data = await Axios.post("/api/user/register", {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data });
  }
};

export { signin, register };
