import react from "react";
import './button.css'

const Button = (props)=>{
    return (
        <div>
            <button type={props.tipo} onClick={props.callback} className={props.estilo}>{props.nome}</button>
        </div>
    )
}

export default Button;