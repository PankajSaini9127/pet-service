import { AUTH_ACTION_CONSTANT } from "../actions/authActions";

const InitialState = {
    auth:false,
    token:null,
    data:null
}


export function authReducer(state=InitialState,action){
    switch (action.type){
        case AUTH_ACTION_CONSTANT:
            return action.payload ;
        
    
        default:
            return state;
        
    }
}