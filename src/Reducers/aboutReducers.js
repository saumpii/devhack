import {
  USER_Info_REQUEST,
  USER_Info_SUCCESS,
  USER_Info_FAIL,
} from "../constants/userConstants";

const aboutReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_Info_REQUEST:
      return { loading: true };
    case USER_Info_SUCCESS:
      return { loading: false, About: action.payload };
    case USER_Info_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { aboutReducer };
