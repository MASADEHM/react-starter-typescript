import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const axiosInstance: AxiosInstance = axios.create();

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  //  console.info(`[request] [${JSON.stringify(config)}]`);
    config.headers.set("Uname", "MMASADEH")
    return config;
}
axiosInstance.interceptors.request.use(onRequest);

export default axiosInstance