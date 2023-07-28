import axios from "axios";
import config from "../Config.json"

let API_LIVE = config.API_LIVE ;

export async function login(data){
     try {
          const response = await axios.post(`${API_LIVE}/auth/login`,data);
       if(response){
          return response.data
       }
     } catch (error) {
          console.log("error while calling login api",error)
     }
};

export async function register(data){
     try {
          const response = await axios.post(`${API_LIVE}/auth/signup`,data);
          if(response){
             return response.data
          }
     } catch (error) {
          console.log("error while calling register api",error)
     }
};

export async function resetPassword(data){
     try {
          const response = await axios.post(`${API_LIVE}/auth/reset-password `,data);
          if(response){
             return response.data
          }
     } catch (error) {
          console.log("error while calling reset Password",error);
     }
}

export async function newPassword(data,email){
     try {
          const response = await axios.post(`${API_LIVE}/auth/new-password?email=${email}`,data);
          if(response){
             return response.data
          }
     } catch (error) {
          console.log("error while calling new Password",error);
     }
}