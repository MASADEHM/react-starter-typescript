import { Navigate, Outlet } from "react-router-dom";
import { Loginservice } from "../services/login.service";

export const PrivateRoute = () => {
    const isLoggedIn = Loginservice.getToken();
    return (isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />)
}