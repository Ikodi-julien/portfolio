import axios from "axios";

const fetchUser = async () => {
  try {
    const response = await axios.get("https://auth.ikodi.eu/me", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("error", error.toString());
  }
};
export default fetchUser;
