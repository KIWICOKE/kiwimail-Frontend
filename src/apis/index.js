import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://www.kiwicoke.com",
  Headers: { "Content-Type": "application/json" },
});

export default axiosClient;
