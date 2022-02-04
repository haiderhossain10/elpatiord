import React from "react";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/nav/NavigationBar";

function Foro() {
    return (
        <>
            <NavigationBar bg="#4723D9" position="unset" />
            <div className="category-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="tienda-head text-center">
                                <h2>CATEGORÍAS</h2>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row justify-center"
                        style={{ marginTop: "10rem" }}
                    >
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-4 mb-32">
                                    <div className="category-card">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <h6>6</h6>
                                                <p>TEMAS</p>
                                            </div>
                                            <div>
                                                <h6>6</h6>
                                                <p>MENSAJES</p>
                                            </div>
                                        </div>
                                        <h2>INFORMACIÓN</h2>
                                        <p>
                                            Reglas - Información General -
                                            Actualizaciones - Anuncios
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-32">
                                    <div className="category-card">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <h6>230</h6>
                                                <p>TEMAS</p>
                                            </div>
                                            <div>
                                                <h6>1.2k</h6>
                                                <p>MENSAJES</p>
                                            </div>
                                        </div>
                                        <h2>COMUNIDAD</h2>
                                        <div className="cat-footer-link">
                                            <ul className="d-flex flex-column gap-2">
                                                <li>
                                                    <a href="#">Guías</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Discusión General
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Preguntas / Soporte
                                                        Técnico
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-32">
                                    <div className="category-card">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <h6>923</h6>
                                                <p>TEMAS</p>
                                            </div>
                                            <div>
                                                <h6>4.1k</h6>
                                                <p>MENSAJES</p>
                                            </div>
                                        </div>
                                        <h2>DENTRO DE JUGADOR</h2>
                                        <div className="cat-footer-link">
                                            <ul className="d-flex flex-column gap-2">
                                                <li>
                                                    <a href="#">
                                                        Organizaciones Oficiales
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Organizaciones (OOC)
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Anuncios (IC)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="category-card">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <h6>1.3k</h6>
                                                <p>TEMAS</p>
                                            </div>
                                            <div>
                                                <h6>14.1k</h6>
                                                <p>MENSAJES</p>
                                            </div>
                                        </div>
                                        <h2>BIOGRAFÍAS / BLOGS</h2>
                                        <div className="cat-footer-link">
                                            <ul className="d-flex flex-column gap-2">
                                                <li>
                                                    <a href="#">
                                                        Biografías de Personajes
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">Galerías</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="category-card">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <h6>6</h6>
                                                <p>TEMAS</p>
                                            </div>
                                            <div>
                                                <h6>226</h6>
                                                <p>MENSAJES</p>
                                            </div>
                                        </div>
                                        <h2>LINKS</h2>
                                        <div className="cat-footer-link d-flex gap-3">
                                            <ul className="d-flex flex-column gap-2">
                                                <li>
                                                    <a href="#">Discord</a>
                                                </li>
                                                <li>
                                                    <a href="#">Instagram</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Soporte (Tickets)
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">RAGE:MP</a>
                                                </li>
                                            </ul>
                                            <ul className="d-flex flex-column gap-2">
                                                <li>
                                                    <a href="#">Twitter</a>
                                                </li>
                                                <li>
                                                    <a href="#">Facebook</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="category-card">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <h6>12</h6>
                                                <p>TEMAS</p>
                                            </div>
                                            <div>
                                                <h6>34</h6>
                                                <p>MENSAJES</p>
                                            </div>
                                        </div>
                                        <h2>OTROS</h2>
                                        <div className="cat-footer-link">
                                            <ul className="d-flex flex-column gap-2">
                                                <li>
                                                    <a href="#">Off Topic</a>
                                                </li>
                                                <li>
                                                    <a href="#">Otros juegos</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Foro;
