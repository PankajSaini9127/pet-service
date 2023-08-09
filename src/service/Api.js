import axios from "axios";
import config from "../Config.json"

let API_LIVE = config.API_LIVE ;


//  user auth 

//user auth
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

//user register
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

//forgot password
export async function resetPassword(data){
     try {
          const response = await axios.post(`${API_LIVE}/auth/reset-password `,data);
          if(response){
             return response.data
          }
     } catch (error) {
          console.log("error while calling reset Password",error);
     }
};

//new password
export async function newPassword(data,email){
     try {
          const response = await axios.post(`${API_LIVE}/auth/new-password?email=${email}`,data);
          if(response){
             return response.data
          }
     } catch (error) {
          console.log("error while calling new Password",error);
     }
};

// user auth ends here

//pet details start here

export async function addPet(data,token){
     try {
          const response = await axios.post(`${API_LIVE}/pets/add-pet`,data,{
               headers:{
                    "Authorization":token
               }
          });
          if(response){
             return response.data
          }
     } catch (error) {
          console.log("error while calling add pets",error);
     }
};

export async function getAllPets(header){
     try {
          const response = await axios.get(`${API_LIVE}/pets/get-pet`,{headers:{"Authorization":header}});
          if(response){
             return response.data
          }
     } catch (error) {
          console.log("error while calling get pets",error);
     }
};

//pets details ends here