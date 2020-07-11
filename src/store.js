import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { userRegisterReducer } from "./Reducers/userReducers";
import { aboutReducer } from "./Reducers/aboutReducers";
const userInfo = Cookie.get("userInfo") || null;

const initialState = {
  userSignin: { userInfo },
};
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  UserAbout: aboutReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
