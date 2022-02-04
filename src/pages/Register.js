import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsDiscord, BsInstagram, BsTwitch } from "react-icons/bs";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/nav/NavigationBar";
import FormImg from "../img/form-img.png";

function Register() {
    const [isRegister, setRegister] = useState(true);
    const loginForm = () => {
        setRegister(false);
    };
    const registerForm = () => {
        setRegister(true);
    };
    return (
        <>
            <NavigationBar bg="#4723D9" position="unset" />
            <div className="form-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-img">
                                <img src={FormImg} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-field-box">
                                <h2>Create your account</h2>
                                <div className="form-btn flex">
                                    <button
                                        onClick={loginForm}
                                        className={!isRegister && "active"}
                                    >
                                        LOGIN
                                    </button>
                                    <button
                                        onClick={registerForm}
                                        className={isRegister && "active"}
                                    >
                                        REGISTER
                                    </button>
                                </div>
                                <div className="form-field">
                                    {isRegister ? (
                                        <>
                                            <form action="">
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Email"
                                                    />
                                                    <span>
                                                        Por defecto, tu cuenta
                                                        de correo electrónico
                                                        estará oculta al
                                                        publico.
                                                    </span>
                                                </div>
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Password"
                                                    />
                                                    <span>
                                                        add a secure password
                                                    </span>
                                                </div>
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Confirm password"
                                                    />
                                                    <span>
                                                        Type the password again
                                                    </span>
                                                </div>
                                                <button>Register</button>
                                            </form>
                                        </>
                                    ) : (
                                        <>
                                            <form action="">
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Email"
                                                    />
                                                    <span>
                                                        Por defecto, tu cuenta
                                                        de correo electrónico
                                                        estará oculta al
                                                        publico.
                                                    </span>
                                                </div>
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Password"
                                                    />
                                                    <span>
                                                        add a secure password
                                                    </span>
                                                </div>
                                                <button>Login</button>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Row style={{ marginTop: "100px" }}>
                        <Col lg={4}>
                            <div className="social-card text-center">
                                <BsTwitch className="m-auto" />
                                <h2>Twitch</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Commodo ut at scelerisque
                                    nibh congue lectus. Vestibulum nulla congue
                                    tincidunt vitae dictum est auctor.
                                </p>
                                <button>Watch stream</button>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="social-card text-center">
                                <BsInstagram className="m-auto" />
                                <h2>instagram</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Commodo ut at scelerisque
                                    nibh congue lectus. Vestibulum nulla congue
                                    tincidunt vitae dictum est auctor.
                                </p>
                                <button>Follow now</button>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="social-card text-center">
                                <BsDiscord className="m-auto" />
                                <h2>Twitch</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Commodo ut at scelerisque
                                    nibh congue lectus. Vestibulum nulla congue
                                    tincidunt vitae dictum est auctor.
                                </p>
                                <button>Watch video</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
