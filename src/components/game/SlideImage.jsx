import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./SlideImage.css";
import LineImg from "./line-bar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ------------------------------- Slide Image ------------------------------ */
import Img01 from "./slide-img-01.png";

function SlideImage() {
    const option = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="slide-img-box">
                <Container>
                    <Row className="justify-center">
                        <Col lg={6}>
                            <div className="section-head text-center">
                                <h2 className="pb-4">
                                    están listos? <span>juega ahora!</span>
                                </h2>
                                <img src={LineImg} className="mx-auto" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="side-img-box mt-12">
                            <Slider {...option}>
                                <div className="slide-img-content ">
                                    <img src={Img01} />
                                    <p className="text-sm text-white text-center mt-2">
                                        lorem ipsum dolor sit amet constructor
                                        ahem
                                    </p>
                                </div>
                                <div className="slide-img-content">
                                    <img src={Img01} />
                                    <p className="text-sm text-white text-center mt-2">
                                        lorem ipsum dolor sit amet constructor
                                        ahem
                                    </p>
                                </div>
                                <div className="slide-img-content ">
                                    <img src={Img01} />
                                    <p className="text-sm text-white text-center mt-2">
                                        lorem ipsum dolor sit amet constructor
                                        ahem
                                    </p>
                                </div>
                                <div className="slide-img-content">
                                    <img src={Img01} />
                                    <p className="text-sm text-white text-center mt-2">
                                        lorem ipsum dolor sit amet constructor
                                        ahem
                                    </p>
                                </div>
                                <div className="slide-img-content">
                                    <img src={Img01} />
                                    <p className="text-sm text-white text-center mt-2">
                                        lorem ipsum dolor sit amet constructor
                                        ahem
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SlideImage;
