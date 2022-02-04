import { Route, Routes } from "react-router-dom";
import Foro from "./pages/Foro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tienda from "./pages/Tienda";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/foro" element={<Foro />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
