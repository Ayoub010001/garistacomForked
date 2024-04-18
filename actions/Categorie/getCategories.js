import { axiosInstance } from "../../axiosInstance";

export const fetchCategorie = async () => {
  try {
    const response = await axiosInstance
      .get("/api/categories/" + 1)
    //   .then((res) => console.log("The Response => ", res.data))
    //   .catch((err) => console.log("The error => ", err));

    return response.data;
  } catch (err) {
    console.log("The Error => ", err);
  }
};
