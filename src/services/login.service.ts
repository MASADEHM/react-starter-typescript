import Cookies from "universal-cookie";
import axiosInstance from "../core/interceptor";

const url = 'https://www.quickpickdeal.com/api/Auth/GetBearerToken' //'http://restapi.adequateshop.com/api/authaccount/login';
const cookie = new Cookies(null, { sameSite: "lax", path: "/", })
const cookieName = "_reactstartercookie"

export const Loginservice = {
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
    }
}
