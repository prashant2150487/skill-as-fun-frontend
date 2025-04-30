import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://skill-as-fun-back-end.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("token");

    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders; // ✅ Fix here
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    console.error("Request error:", error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
