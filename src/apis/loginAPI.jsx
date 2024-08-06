import axiosClient from ".";

const loginAPI = {
  SIGNIN: async () => {
    const response = await axiosClient.post(`/api/login/`);
    return response.data; // success, data {token, user_index, name, insta, postCount}
  },
  SIGNUP: async ({ Name, Insta }) => {
    const response = await axiosClient.post(`/api/signup/`, {
      name: Name,
      insta: Insta,
    });
    return response.data; // success
  },
};

export default loginAPI;
