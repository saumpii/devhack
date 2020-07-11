import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { userRegisterReducer } from "./Reducers/userReducers";
import { aboutReducer } from "./Reducers/aboutReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  UserAbout: aboutReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer);
export default store;
