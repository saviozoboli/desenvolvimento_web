import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import "./App.css";
import ListarVagas from "./pages/listar-vagas/listar-vagas";
import CadastrarReserva from "./pages/cadastrar-reserva/cadastrar-reserva";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Navigate to="/listar" replace></Navigate>}></Route>
          <Route path="/listar" element={<ListarVagas></ListarVagas>}></Route>
          <Route path="/cadastrar" element={<CadastrarReserva></CadastrarReserva>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
