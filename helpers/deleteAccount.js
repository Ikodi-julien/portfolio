import axios from "axios";

const deleteAccount = async () => {
  try {
    const response = await axios.delete(
      `https://auth.ikodi.eu/me/credentials`,
      {
        withCredentials: true,
      }
    );
    console.log("Deleted id:", response.data.id);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default deleteAccount;
