import { Link, useNavigate } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";

import { Loginservice } from "../services/login.service";
import tokenService from "../services/token.service";


const Menu = () => {
    const isLoggedIn = tokenService.getToken();
    
    const nav = useNavigate();
    const logout = () => {
        tokenService.removeToken();
        nav('/', { replace: true })
    }
    const publicLinks = [
        {
            id: 1,
            title: 'Home',
            path: '/'
        }, {
            id: 2,
            title: 'About',
            path: '/about'
        }
    ]
    const privateLinks = [{
        id: 5,
        title: 'Users',
        path: '/users'

    }, {
        id: 6,
        title: 'Add',
        path: '/add'
    }]

    const Links = isLoggedIn ? [...publicLinks, ...privateLinks] : [...publicLinks]
    return (<>
        <Container>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <Link
                    to="/"
                    className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                >
                    <>React Typescript Starter</>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        {Links.map((d) => (
                            <li key={d.id}>
                                <Link to={d.path} className="nav-link px-2 link-secondary">
                                    {d.title}
                                </Link>
                            </li>
                        ))}
                        {isLoggedIn && (
                            <li>
                                <Link className="nav-link px-2 link-secondary" to="/" onClick={logout}>Logout</Link>
                            </li>
                        )}
                        {!isLoggedIn && (
                            <li>
                                <Link to="/login" className="nav-link px-2 link-secondary">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </Nav>
            </header>
        </Container>
    </>)
}
export default Menu