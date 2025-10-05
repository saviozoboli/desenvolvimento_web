import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = ()=>{
    return (
        <nav>
            <Link to="/listar">Listar vagas</Link>
            <Link to="/cadastrar">Cadastrar reservas</Link>
        </nav>
    )
}

export default Navigation;