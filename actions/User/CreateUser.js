import { axiosInstance } from "../../axiosInstance"
import { APIURL } from "../../lib/ApiKey";

export const adduser = async () => {
    try{
       const response = await axiosInstance.po
    }
    catch(error){

    }
}

export const  getUserById = async (id) => {
    
    try {
      const response = await axiosInstance.get(`${APIURL}/api/users/${id}`);
  
      if (response.status === 200) {
        console.log("The Response of User => ", response.data.users);
      }
      return response.data.users;
    } catch (error) {
      console.error('Error User:', error);
    }
  }
