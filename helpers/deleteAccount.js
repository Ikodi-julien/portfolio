const deleteAccount = async () => {
  await axios.delete(`https://auth.ikodi.eu/me/credentials`, {
    withCredentials: true,
  });
};
export default deleteAccount;
