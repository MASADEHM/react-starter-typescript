import { Navigate, Outlet } from "react-router-dom";
<<<<<<< HEAD
import { Loginservice } from "../services/login.service";

export const PrivateRoute = () => {
    const isLoggedIn = Loginservice.getToken();
=======
import tokenService from "../services/token.service";

export const PrivateRoute = () => {
    const isLoggedIn = tokenService.LoggedIn();
    console.log(isLoggedIn)
>>>>>>> defeaf65741bac5441b689c8a69e95d4407663c8
    return (isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />)
}