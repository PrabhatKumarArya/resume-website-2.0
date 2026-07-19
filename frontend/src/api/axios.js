import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT only for protected routes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // Skip token for public APIs
    if (
      token &&
      config.url !== "/contact" &&
      config.url !== "/auth/login"
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Auto logout only for protected requests
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      error.config?.url !== "/contact"
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("admin");

      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  }
);

export default api;