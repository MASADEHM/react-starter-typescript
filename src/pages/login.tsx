import {  useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ILoginRequest } from "../interfaces/login.interface";
import { Loginservice } from "../services/login.service";
import { useNavigate } from "react-router-dom";
import {message,Spin} from  "antd"
const Login = () => {
    const [login, setlogin] = useState<ILoginRequest>({ email: '', password: '' });
    const [isLoading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const nav = useNavigate();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setLoading(true);
        if(true){
            Loginservice.setToken("true");
            nav('/users', { replace: true })
        }
        // Loginservice.login(login).then(d => {
        //     if (d.data) {
        //         console.log(d.data)
        //         Loginservice.setToken("true");
        //         nav('/', { replace: true })
        //     }
        // }).catch(e => {
        //     message.error(e.message)
        //     setLoading(false);
        // });
    }
    const handleChange = (e: any) => {
        const name = e.target.name;
        const val = e.target.value
        setlogin({ ...login , [name]: val })
    }

    return (
        <>
            <Container>
             
                <Row>
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">
                                    Sign In
                                </h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            name="email"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label>Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            name="password"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label>Password</label>
                                    </div>

                                    <div className="d-grid">
                                        {!isLoading && <button
                                            className="btn btn-primary btn-login text-uppercase fw-bold"
                                            type="submit"
                                        >
                                            Sign in
                                        </button>}
                                        {isLoading && <Spin/>}
                                    </div>
                                    <div className="form-check mt-3">
                                        <input type="checkbox" onChange={() => { setRememberMe(!rememberMe) }} className="form-check-input" />
                                        <label className="form-check-label" >Remember Me</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>)
}
export default Login;