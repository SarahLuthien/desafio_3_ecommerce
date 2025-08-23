import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  console.log(`🌐 Fazendo request para: ${config.baseURL}${config.url}`);
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ Erro na API:", error.message);
    console.error("📋 URL:", error.config?.baseURL + error.config?.url);
    return Promise.reject(error);
  }
);

export default apiClient;
