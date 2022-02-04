import Footer from "../components/footer/Footer";
import NavigationBar from "../components/nav/NavigationBar";
import cardImg1 from "./../img/tienda (1).png";
import cardImg2 from "./../img/tienda (2).png";
import cardImg3 from "./../img/tienda (3).png";

function Tienda() {
    return (
        <>
            <NavigationBar bg="#4723D9" position="unset" />
            <div className="tienda-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="tienda-head text-center">
                                <h2>COMPRAR PAQUETE DE elpa</h2>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row justify-content-center"
                        style={{ marginTop: "10rem" }}
                    >
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="tienda-card text-center">
                                        <img
                                            src={cardImg1}
                                            className="img-fluid"
                                        />
                                        <h2>PUÑADO DE elpa</h2>
                                        <button>comprar por 5 usd</button>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tienda-card text-center">
                                        <img
                                            src={cardImg2}
                                            className="img-fluid"
                                        />
                                        <h2>MALETA DE elpa</h2>
                                        <button>comprar por 13 usd</button>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tienda-card text-center">
                                        <img
                                            src={cardImg3}
                                            className="img-fluid"
                                        />
                                        <h2>CAJA DE elpa</h2>
                                        <button>comprar por 20 usd</button>
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

export default Tienda;
