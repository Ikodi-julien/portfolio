import axios from "axios";

const deleteAccount = async () => {
  try {
    const response = await axios.delete(
      `https://auth.ikodi.eu/me/credentials`,
      {
        withCredentials: true,
      }
    );
    console.log("response.data", response.data);
    console.log("Deleted id:", response.data.id);
    return response.data ? response.data.id : false;
  } catch (error) {
    console.log(error);
  }
};
export default deleteAccount;
