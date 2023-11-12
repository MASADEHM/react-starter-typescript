import axiosInstance from "../core/interceptor";
import { ILogin } from "../interfaces/login.interface";

const loginUrl = 'http://restapi.adequateshop.com/api/authaccount/login';

export const Loginservice = {
    login: async (request: ILogin) => {
        console.log(request)
        return await axiosInstance.post<any>(loginUrl, request);

    }
}
