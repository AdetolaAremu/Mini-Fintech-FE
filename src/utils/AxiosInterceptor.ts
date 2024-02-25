import axios from "axios";

// Create Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve token from Redux state
    const token = localStorage.getItem("jwtToken");

    // Attach token to request headers if it exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
