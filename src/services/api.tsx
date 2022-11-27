import axios from "axios";

const api = axios.create({
  baseURL: "https://myjam-api.up.railway.app/",
  headers: { "Content-Type": "application/json" },
});

export default api;
