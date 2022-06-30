import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Cadastro from "./Cadastro";
import GlobalStyle from './globalStyles';
import Registros from "./Registros";
export default function App() {
    return (
        <BrowserRouter>
        <GlobalStyle/>
            <Routes>
                <Route path="/" element={ <Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/registros" element={<Registros />} />
            </Routes>
        </BrowserRouter>
    )
}