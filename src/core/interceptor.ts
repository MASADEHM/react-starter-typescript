import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { Loginservice } from "../services/login.service";
import tokenService from "../services/token.service";
import { useNavigate } from "react-router-dom";


const axiosInstance: AxiosInstance = axios.create();

const Token=tokenService.getToken();
const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  //  console.info(`[request] [${JSON.stringify(config)}]`);
  config.headers.set("Auth", Token)
  return config;
}
axiosInstance.interceptors.request.use(onRequest);

export default axiosInstance