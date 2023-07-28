import { combineReducers, createStore } from "redux";
import AlertReducer from "./reducers/alert-reducer";
import { authReducer } from "./reducers/auth-reducer";


const reducer = combineReducers({alert:AlertReducer,auth:authReducer});

const store = createStore(reducer);

export default store;