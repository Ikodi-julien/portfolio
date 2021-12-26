import axios from "axios";

const postLogout = async () => {
  console.log("hé!");
  try {
    await axios.post(
      "https://auth.ikodi.eu/logout",
      {},
      { withCredentials: true }
    );
  } catch (error) {
    console.log(error);
  }
};
export default postLogout;
