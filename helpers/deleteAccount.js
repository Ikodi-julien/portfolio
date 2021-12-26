import axios from "axios";

const deleteAccount = async () => {
  const response = await axios.delete(`https://auth.ikodi.eu/me/credentials`, {
    withCredentials: true,
  });
  return response;
};
export default deleteAccount;
