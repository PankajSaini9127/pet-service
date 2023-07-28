export const SET_ALERT = "SET_ALERT";

export function setAlert(data){
    return{
        type:SET_ALERT,
        payload:data
    }
}