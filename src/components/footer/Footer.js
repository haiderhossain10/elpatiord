import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import FooterLogo from "../../img/logo.png";

function Footer() {
    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <footer className="footer-box">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={3}>
                            <div className="footer-logo">
                                <img src={FooterLogo} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="footer-link ">
                                <ul className="d-lg-flex align-items-center justify-content-center">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">NOTICIAS</a>
                                    </li>
                                    <li>
                                        <a href="#">TIENDA</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Help</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="footer-right">
                                <button
                                    onClick={bottomToTop}
                                    className="d-flex align-items-center gap-2 ms-auto"
                                >
                                    <BsFillArrowUpSquareFill className="me-2" />
                                    <span> Go to top</span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
