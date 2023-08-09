const initialState = {loading:false};

export function LoadingReducer (state=initialState,action){
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
    
        default:
            return state;
    }
}