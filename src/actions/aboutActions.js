import Axios from "axios";
import {
  USER_Info_REQUEST,
  USER_Info_SUCCESS,
  USER_Info_FAIL,
} from "../constants/userConstants";

const abba = (brand, about, link1, link2, link3) => async (dispatch) => {
  dispatch({
    type: USER_Info_REQUEST,
    payload: { brand, about, link1, link2, link3 },
  });
  try {
    const { data } = await Axios.post("/api/user/profile", {
      brand,
      about,
      link1,
      link2,
      link3,
    });
    dispatch({ type: USER_Info_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_Info_FAIL, payload: error.message });
  }
};

export { abba };
