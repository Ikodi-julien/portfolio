import axios from "axios";

const postLogout = async () => {
  console.log("hé!");
  try {
    const response = await axios.post(
      "https://auth.ikodi.eu/logout",
      {},
      { withCredentials: true }
    );

    return response.data ? response.data.message : false;
  } catch (error) {
    console.log(error);
  }
};
export default postLogout;
