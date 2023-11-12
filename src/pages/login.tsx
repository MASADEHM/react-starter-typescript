import { ChangeEvent, useState } from "react";
import { Container, Row, Toast, Col, ToastContainer, Spinner } from "react-bootstrap";
import { ILogin } from "../interfaces/login.interface";
import { Loginservice } from "../services/login.service";
const Login = () => {
    const [show, setShow] = useState(false);
    const [err, setError] = useState("");
    const [values, setValues] = useState<ILogin>({ email: '', password: '' });
    const [isLoading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        Loginservice.login(values).then(d => {
            if (d.data) {
                console.log(d.data)
            }
        })
    }
    const handleChange = (e: any) => {
        const name = e.target.name;
        const val = e.target.value
        console.log(values)
        setValues({ ...values, [name]: val })
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className="mx-auto" sm={9} md={7} lg={5}>
                        <ToastContainer
                            position="top-end"
                            className="p-3"
                            style={{ zIndex: 1 }}
                        >
                            <Toast
                                className="d-inline-block m-1"
                                onClose={() => {
                                    setShow(false);
                                }}
                                show={show}
                                delay={3000}
                                autohide
                            >
                                <Toast.Body>{err}</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </Col>
                </Row>
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
                                        {isLoading && <Spinner variant='primary' />}
                                    </div>
                                    <div className="form-check mt-3">
                                        <input type="checkbox" onChange={() => { setRememberMe(!rememberMe) }} className="form-check-input" id="exampleCheck1" />
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