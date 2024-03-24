import Cookies from "universal-cookie";
import axiosInstance from "../core/interceptor";
<<<<<<< HEAD
=======
import { ILoginReponse, ILoginRequest } from "../interfaces/login.interface";
>>>>>>> defeaf65741bac5441b689c8a69e95d4407663c8

const url = 'https://www.quickpickdeal.com/api/Auth/GetBearerToken' //'http://restapi.adequateshop.com/api/authaccount/login';
const cookie = new Cookies(null, { sameSite: "lax", path: "/", })
const cookieName = "_reactstartercookie"

export const Loginservice = {
<<<<<<< HEAD
    login: async () => {
        return await axiosInstance.get<any>(url);
    },
    setToken: async (token: any) => {
        cookie.set(cookieName, token);
    },
    getToken:  () => {
        return  cookie.get(cookieName)
    },
    removeToken: async () => {
        cookie.remove(cookieName)
=======
    login: async (request: ILoginRequest) => {
        console.log(request)
        return await axiosInstance.post<any,ILoginReponse | any>(loginUrl, request);

>>>>>>> defeaf65741bac5441b689c8a69e95d4407663c8
    }
}
