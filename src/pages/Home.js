import Banner from "../components/banner/Banner";
import SlideImage from "../components/game/SlideImage";
import { Col, Container, Row } from "react-bootstrap";
import {
    FaArrowCircleRight,
    FaDiscord,
    FaArrowAltCircleRight,
} from "react-icons/fa";
import {
    BsCollectionPlayFill,
    BsTwitch,
    BsInstagram,
    BsDiscord,
} from "react-icons/bs";
import VideoImage from "../components/game/slide-img-01.png";
import PlayBtn from "../img/play-btn.png";
import GameImg01 from "../img/game-01.png";
import HelpBg from "../img/help-bg.jpg";
import ElpatiordImg from "../components/nav/logo.png";
import { useState } from "react";
import tabImg1 from "../img/tab-1.png";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/nav/NavigationBar";

function Home() {
    const [getIsActive, setIsActive] = useState({
        tabFirst: true,
        tabSecond: false,
        tabThird: false,
    });
    const tabFirst = () => {
        setIsActive({
            tabFirst: true,
            tabSecond: false,
            tabThird: false,
        });
    };
    const tabSecond = () => {
        setIsActive({
            tabFirst: false,
            tabSecond: true,
            tabThird: false,
        });
    };
    const tabThird = () => {
        setIsActive({
            tabFirst: false,
            tabSecond: false,
            tabThird: true,
        });
    };
    return (
        <>
            <NavigationBar />
            <Banner />
            <SlideImage />
            {/* video player section */}
            <div className="video-palyer-box">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="video-player relative">
                                <img
                                    src={VideoImage}
                                    className="img-fluid img-1"
                                />
                                <button className="absolute img-2">
                                    <img src={PlayBtn} />
                                </button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="video-content mt-10 lg:mt-0">
                                <h2>Video Roleplay</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum nibh a, sapien,
                                    laoreet nulla auctor. Molestie in elit
                                    rhoncus, ut id venenatis nec id
                                    pellentesque. Felis urna in vitae egestas
                                    amet fames bibendum auctor etiam. Amet
                                    ullamcorper varius magna accumsan, viverra
                                    consequat in. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Vestibulum nibh
                                    a, sapien, laoreet nulla auctor. Molestie in
                                    elit
                                </p>
                                <a href="#" className="mt-10">
                                    Watch More
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* help section */}
            <div
                className="help-box"
                style={{ backgroundImage: `url(${HelpBg})` }}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={4}>
                            <div className="help-content ">
                                <h2 className="text-center pb-4">
                                    PASO <span>1</span>
                                </h2>
                                <div className="help-content-box text-center p-6">
                                    <img src={GameImg01} className="mx-auto" />
                                    <h2>
                                        Compra e instala el juego
                                        <span> GTA V original</span> en tu
                                        <span> PC</span>
                                    </h2>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 justify-center"
                                    >
                                        <FaArrowCircleRight />
                                        <span>Comprar en Steam</span>
                                    </a>
                                </div>
                                <div className="help-social-btn text-center mt-10">
                                    <a
                                        href="#"
                                        className="d-inline-flex items-center gap-2"
                                    >
                                        <FaDiscord />
                                        <span>DISCORD OFICIAL</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="help-middle-text">
                                <h2>
                                    Necesitas <span> ayuda ?</span>
                                </h2>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="help-content help-content-2">
                                <h2 className="text-center pb-4">
                                    PASO <span>2</span>
                                </h2>
                                <div className="help-content-box text-center p-6">
                                    <img
                                        src={ElpatiordImg}
                                        className="mx-auto"
                                    />
                                    <h2>
                                        Descarga el
                                        <span> launcher </span>
                                        oficial de <span> ELPATIORD</span>
                                    </h2>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 justify-center"
                                    >
                                        <FaArrowCircleRight />
                                        <span>Descargar</span>
                                    </a>
                                </div>
                                <div className="help-social-btn help-social-btn-2 text-center mt-10">
                                    <a
                                        href="#"
                                        className="d-inline-flex items-center gap-2"
                                    >
                                        <BsCollectionPlayFill />
                                        <span>VIDEO TUTORIAL</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* tab section */}
            <div className="tab-main-box">
                <Container>
                    <Row>
                        <Col className="flex">
                            <div className="tab-left relative">
                                <ul className="pt-20">
                                    <li>
                                        <button
                                            className={
                                                getIsActive.tabFirst
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={tabFirst}
                                        >
                                            CREA TU PROPIA ORGANIZACION
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={
                                                getIsActive.tabSecond
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={tabSecond}
                                        >
                                            MODIFICA TU CASA O DEPARTAMENTO
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={
                                                getIsActive.tabThird
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={tabThird}
                                        >
                                            CONOCE A NUEVAS PERSONAS
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-left-content text-center absolute bottom-14 left-0 px-4">
                                    <h2>
                                        están listos? <span>juega ahora!</span>
                                    </h2>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 mt-4"
                                    >
                                        <FaArrowAltCircleRight />
                                        <span>EMPEZAR A JUGAR</span>
                                    </a>
                                </div>
                            </div>
                            {getIsActive.tabFirst ? (
                                <>
                                    <div className="tab-right">
                                        <div className="tab-right-content">
                                            <img src={tabImg1} alt="" />
                                            <h2 className="py-10">
                                                CREA TU PROPIA ORGANIZACIÓN 01
                                            </h2>
                                            <p className="pb-10">
                                                Conquista la ciudad con tus
                                                amigos y crea tu propia
                                                organización, ya sea legal o
                                                ilegal Quizás quieras formar una
                                                pandilla, una mafia, un club de
                                                moteros o incluso una empresa de
                                                taxis, de seguridad o un taller
                                                mecánico.
                                            </p>
                                            <p>
                                                Conquista la ciudad con tus
                                                amigos y crea tu propia
                                                organización, ya sea legal o
                                                ilegal Quizás quieras formar una
                                                pandilla, una mafia, un club de
                                                moteros o incluso una empresa de
                                                taxis, de seguridad o un taller
                                                mecánico.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                            {getIsActive.tabSecond ? (
                                <>
                                    <div className="tab-right">
                                        <div className="tab-right-content">
                                            <img src={tabImg1} alt="" />
                                            <h2 className="py-10">
                                                CREA TU PROPIA ORGANIZACIÓN 02
                                            </h2>
                                            <p className="pb-10">
                                                Conquista la ciudad con tus
                                                amigos y crea tu propia
                                                organización, ya sea legal o
                                                ilegal Quizás quieras formar una
                                                pandilla, una mafia, un club de
                                                moteros o incluso una empresa de
                                                taxis, de seguridad o un taller
                                                mecánico.
                                            </p>
                                            <p>
                                                Conquista la ciudad con tus
                                                amigos y crea tu propia
                                                organización, ya sea legal o
                                                ilegal Quizás quieras formar una
                                                pandilla, una mafia, un club de
                                                moteros o incluso una empresa de
                                                taxis, de seguridad o un taller
                                                mecánico.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                            {getIsActive.tabThird ? (
                                <>
                                    <div className="tab-right">
                                        <div className="tab-right-content">
                                            <img src={tabImg1} alt="" />
                                            <h2 className="py-10">
                                                CREA TU PROPIA ORGANIZACIÓN 03
                                            </h2>
                                            <p className="pb-10">
                                                Conquista la ciudad con tus
                                                amigos y crea tu propia
                                                organización, ya sea legal o
                                                ilegal Quizás quieras formar una
                                                pandilla, una mafia, un club de
                                                moteros o incluso una empresa de
                                                taxis, de seguridad o un taller
                                                mecánico.
                                            </p>
                                            <p>
                                                Conquista la ciudad con tus
                                                amigos y crea tu propia
                                                organización, ya sea legal o
                                                ilegal Quizás quieras formar una
                                                pandilla, una mafia, un club de
                                                moteros o incluso una empresa de
                                                taxis, de seguridad o un taller
                                                mecánico.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* social section */}
            <section className="social-box">
                <Container>
                    <Row>
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
                </Container>
            </section>
            {/* footer section */}
            <Footer />
        </>
    );
}

export default Home;
