import axios from "axios";
import { BASE_URL } from "../shared/constant";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  Headers: { "Content-Type": "application/json" },
});

export default axiosClient;
