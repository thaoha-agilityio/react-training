import axios from "axios";
import { API_BASE_URL } from "@/constants/api";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

// Add a response interceptor
instance.interceptors.response.use((response) => response.data);

export default instance;
