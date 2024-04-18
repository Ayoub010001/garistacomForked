import { axiosInstance } from "../../axiosInstance";

export const addCategorie = async ({
    name,
    image
}) => {
    try{
       const response = await axiosInstance.post("/api/categories", {
        name,
        image,
        resto_id: 1
       },
        {
            headers: {
                "Accept": "application/json"
            }
        }
       ).then((res) => console.log("The Response => ", res.data))
       .catch(err => console.log(err))

       return response;
    }
    catch(err){
        console.log("The Error");
    }
}