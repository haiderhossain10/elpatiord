import { Container } from "react-bootstrap";
import "./Banner.css";
import BannerImage from "./banner.png";
import BannerOverlay from "./banner-overlay.png";

function Banner() {
    return (
        <>
            <section
                className="banner-box h-screen relative"
                style={{ backgroundImage: `url(${BannerImage})` }}
            >
                <Container>
                    <div className="banner-content absolute mt-10 md:mt-0">
                        <h2>
                            LA <span>MEJOR EXPERIENCIA</span> DE ROLEPLAY
                        </h2>
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h4>
                        <p>
                            Conquista la ciudad con tus amigos y crea tu propia
                            organización, ya sea legal o ilegal Quizás quieras
                            formar una pandilla,
                        </p>
                        <div className="md:flex gap-5 mt-5">
                            <a
                                href="#"
                                className="flex items-center justify-center mb-3 md:mb-0"
                            >
                                <span>Start playing</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center"
                            >
                                <span>Watch video</span>
                            </a>
                        </div>
                    </div>
                    <div className="banner-overlay absolute bottom-0 hidden md:block">
                        <img src={BannerOverlay} className="img-fluid" alt="" />
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Banner;
