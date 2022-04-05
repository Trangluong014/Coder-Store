import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.response.use(
  (response) => {
    console.log("Start REQUEST", response);
    return response;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default apiService;
