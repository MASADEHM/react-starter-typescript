import { RouteObject } from "react-router-dom"
import App from "../App"
import Home from "../pages/home"
import About from "../pages/about"
import ContactUs from "../pages/contactus"
import { PrivateRoute } from "./privateroutes"
import Users from "../pages/users/users"
import Add from "../pages/users/add"
import { createBrowserRouter } from 'react-router-dom'
import Login from "../pages/login"

const publicRoutes: RouteObject[] = [{
    path: '/',
    element: <App />,
    children: [{
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <ContactUs />
    }, {
        path: '/login',
        element: <Login />
    }
    ]
}]
const privateRoute: RouteObject[] = [{
    path: '/',
    element: <PrivateRoute />,
    children: [{
        path: '/users',
        element: <Users />
    }, {
        path: '/add',
        element: <Add />
    }]
}]
const TRouter = createBrowserRouter([
    ...publicRoutes, ...privateRoute
])
export default TRouter;