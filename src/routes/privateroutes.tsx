import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const isLoggedIn = false;
    return (isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />)
}