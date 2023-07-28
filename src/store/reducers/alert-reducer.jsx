import { SET_ALERT } from "../actions/alert-action";

const InitialState = {
    open:null,
    variant:null,
    message:null
}



export default function AlertReducer(state=InitialState,action){
    switch (action.type) {
        case SET_ALERT:
            return action.payload
        default:
            return state;
    }
}