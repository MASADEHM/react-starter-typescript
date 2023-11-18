import axiosInstance from "../core/interceptor";
import { ILoginReponse, ILoginRequest } from "../interfaces/login.interface";

const loginUrl = 'http://restapi.adequateshop.com/api/authaccount/login';

export const Loginservice = {
    login: async (request: ILoginRequest) => {
        console.log(request)
        return await axiosInstance.post<any,ILoginReponse | any>(loginUrl, request);

    }
}
