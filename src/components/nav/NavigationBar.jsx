import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import SiteLogo from "./logo.png";

function NavigationBar(props) {
    return (
        <div
            className="header-box absolute top-0 left-0 z-10 w-full py-3"
            style={{ backgroundColor: props.bg, position: props.position }}
        >
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={SiteLogo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav " className="lg:pl-5">
                        <Nav className="me-auto uppercase gap-4">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/noticias" className="nav-link">
                                Noticias
                            </NavLink>
                            <NavLink to="/tienda" className="nav-link">
                                Tienda
                            </NavLink>
                            <NavLink to="/foro" className="nav-link">
                                Foro
                            </NavLink>
                        </Nav>
                        <Nav className="lg:ms-auto lg:items-center uppercase gap-4 mt-4 mt-lg-0">
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="nav-link">
                                Register
                            </NavLink>
                            <NavLink
                                to="/contacto"
                                className="nav-link btn-effect justify-center flex items-center"
                            >
                                <span>Contacto</span>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
