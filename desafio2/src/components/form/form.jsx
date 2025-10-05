import react from "react";
import Button from "../button/button";
import Input from "../input/input";

import "./form.css";

const Form = (props) => {
  const controls = props.campos;

  return (
      <form id={props.formName}>
        {controls.map((input, index) => {
          return (
            <Input
              nome={input.nome}
              tipo={input.tipo}
              titulo={input.titulo}
              dica={input.dica}
              key={index}
            ></Input>
          );
        })}
        <Button
          nome="Salvar"
          tipo="submit"
          callback={props.callback}
          estilo="primario"
        ></Button>
        <Button
          nome="Limpar"
          tipo="reset"
          callback={() => {
            console.log("Nenhum callback");
          }}
          estilo="secundario"
        ></Button>
      </form>
  );
};

export default Form;
