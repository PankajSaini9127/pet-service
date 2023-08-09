import { combineReducers, createStore } from "redux";
import AlertReducer from "./reducers/alert-reducer";
import { authReducer } from "./reducers/auth-reducer";
import { LoadingReducer } from "./reducers/loading-reducer";


const reducer = combineReducers({alert:AlertReducer,auth:authReducer,loading:LoadingReducer});

const store = createStore(reducer);

export default store;