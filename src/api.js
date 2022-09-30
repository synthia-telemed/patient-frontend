import axios from "axios";

const api = axios.create({
  baseURL: "https://api.synthia.tech/patient/api",
  withCredentials: false,
});


export default api;
