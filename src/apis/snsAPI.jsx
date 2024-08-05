import axiosClient from ".";

const snsAPI = {
  PATCH_INSTA: async ({ UserIndex, Insta }) => {
    const response = await axiosClient.patch(`/api/insta`, {
      user_index: UserIndex,
      insta: Insta,
    });
    return response.data; // success
  },
  POST_INSTA: async ({ UserIndex, Insta }) => {
    const response = await axiosClient.post(`/api/insta`, {
      user_index: UserIndex,
      insta: Insta,
    });
    return response.data; // success
  },
  DELETE_INSTA: async ({ UserIndex }) => {
    const response = await axiosClient.delete(`/api/insta/${UserIndex}`);
  },
};
