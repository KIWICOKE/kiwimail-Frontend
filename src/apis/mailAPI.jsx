import axiosClient from ".";

const postAPI = {
  GET_POST: async ({ UserIndex, PostIndex }) => {
    const response = await axiosClient.get(
      `/api/${UserIndex}/post/${PostIndex}`,
      { post_index: PostIndex }
    );
    return response.data; // success, data {writer, content, writingPad, emoticon, createdAt, disclosure, name}
  },
  GET_POST_LIST: async ({ UserIndex, Receiver }) => {
    const response = await axiosClient.get(`/api/${UserIndex}/post`, {
      receiver: Receiver,
    });
    return response.data; // success, data {post_index, disclosure, postCount}
  },
  POST_POST: async ({ UserIndex, Receiver }) => {
    const response = await axiosClient.post(`/api/${UserIndex}/post`, {
      receiver: Receiver,
    });
    return response.data; // success, data {post_index, disclosure, postCount}
  },
};

export default postAPI;
