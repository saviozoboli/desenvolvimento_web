import react from "react";
import './mensagem.css'

const Mensagem = (props)=>{
    return (
        <p className={props.tipo}>{props.mensagem}</p>
    )
}

export default Mensagem;