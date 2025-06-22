import axios from 'axios'

export const loginUser = async (user) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/v1/user/login",
      user,{
        withCredentials:true
      });
      console.log("recieving user data :",res.data)

    return res;
  } catch (err) {
    console.log(err?.response?.data);
    return err?.response?.data?.message || "Login failed";
  }
};
