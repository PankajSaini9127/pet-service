export const AUTH_ACTION_CONSTANT = "SET_AUTH";

export function set_auth(data){
    return {
        type:AUTH_ACTION_CONSTANT,
        payload:data
    }
}; 