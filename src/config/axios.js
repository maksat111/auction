import axios from "axios";

// axios.defaults.withCredentials = true;

const BASE_URL = "http://" + localStorage.getItem("url") + ":5000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export { axiosInstance, BASE_URL };
