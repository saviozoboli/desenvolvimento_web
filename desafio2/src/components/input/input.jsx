import react from "react";

import './input.css';

const Input = (props)=>{
    return (
        <div className="formInput">
            <label htmlFor={props.nome}>{props.titulo}</label>
            <input id={props.nome} name={props.nome} type={props.tipo} placeholder={props.dica}></input>
        </div>
        
    )
}

export default Input;