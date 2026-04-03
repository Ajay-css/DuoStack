import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // backend URL
  withCredentials: true
});

export default instance;