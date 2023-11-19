import { wait } from "@testing-library/user-event/dist/utils";
import axiosInstance from "../core/interceptor";

const url = 'https://jsonplaceholder.typicode.com/users';
const UserService = {
    getAll: async () => {
        return await axiosInstance.get(url).then(d => d)
    }
}
export default UserService;