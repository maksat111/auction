import axios from "axios";

// axios.defaults.withCredentials = true;

const BASE_URL = "http://" + localStorage.getItem("url") + ":5000";
const token = localStorage.getItem("token");
console.log(token);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    "x-access-token": `${token}`,
  },
});

export { axiosInstance, BASE_URL };
