import { axiosInstance } from "../../axiosInstance";

export const getRoles = async () => {
   try{
       const response = await axiosInstance.get('/api/roles');
       if(response.status == 200){
          console.log("The Data is returned with successfully");
       }
       return response.data.roles;
   }
   catch(error){
    console.log("The Error => ", error);
   }
}