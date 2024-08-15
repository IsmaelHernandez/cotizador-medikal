import axios from "axios";

const apiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.common["api-key"] = import.meta.env.VITE_APP_API_KEY;

    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    axios.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          location.href = "/login";
        }
        return Promise.reject(err);
      }
    );
  },

  setToken() {
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },

  removeToken() {
    axios.defaults.headers.common["Authorization"] = null;
  },

  get(url) {
    return axios.get(url);
  },

  post(url, payload) {
    return axios.post(url, payload);
  },

  put(url, payload) {
    return axios.put(url, payload);
  },
};

export default apiService;
