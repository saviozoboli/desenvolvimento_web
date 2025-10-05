import React, { useState } from "react";
import Header from "../../components/header/header";
import Form from "../../components/form/form"
import Mensagem from "../../components/mensagem/mensagem";

const CadastrarReserva = () =>{

    const formName = 'cadastro-reservas'

    let [mensagem,setMensagem] = useState('')
    let [tipoMsg,setTipo] = useState('')

    function showMensagem(mensagem,tipo,tempo=10000){
        setMensagem(mensagem)
        setTipo(tipo)
        setTimeout(()=>{
            limpaMensagem()
        },tempo)
    }

    function limpaMensagem(){
        setMensagem("")
        setTipo("")
    }

    const campos = [
        {nome:'vaga',tipo:'number',titulo:'Vaga',dica:""},
        {nome:'nome',tipo:'text',titulo:'Morador',dica:"ex.: Paulo de Andrade"},
        {nome:'bloco',tipo:'text',titulo:'Bloco',dica:"ex.: BL 02"},
        {nome:'apto',tipo:'text',titulo:'Apto',dica:""},
        {nome:'veiculo',tipo:'text',titulo:'Veículo',dica:"ex.: Honda Civic"},
        {nome:'cor',tipo:'text',titulo:'Cor',dica:""},
        {nome:'placa',tipo:'text',titulo:'Placa',dica:"ABC1D23"},
    ]

    const callback = (e)=>{
        e.preventDefault();

        limpaMensagem()



        const formulario = document.querySelector('#'+formName)
        if(!formulario.elements){
            return;
        }
        let elementos = formulario.elements;

        let dados = {
            vaga:elementos.vaga.value,
            nome:elementos.nome.value,
            bloco:elementos.bloco.value,
            apto:elementos.apto.value,
            veiculo:elementos.veiculo.value,
            cor:elementos.cor.value,
            placa:elementos.placa.value,
        }

        if(dados.vaga === '' || dados.nome === '' || dados.bloco === '' || dados.apto === '' || dados.veiculo === '' || dados.cor === '' || dados.placa === ''){
            showMensagem("Necessário preencher todos os campos","erro")
            return;
        }

        let vagas = JSON.parse(localStorage.getItem('vagas'))
        let num_vagas = vagas.length;

        if(dados.vaga > num_vagas){
            showMensagem(`Vaga deve estar entre 1 e ${num_vagas}`,"erro")
            return;
        }

        if(dados.placa.length !== 7){
            showMensagem("Placa no formato inválido, o valor deve ser no formato ABC1D23","erro")
            return;
        }

        if(vagas[dados.vaga - 1].veiculo!= null){
            showMensagem("Vaga já ocupada, escolha outra","erro")
            return;
        }

        vagas[dados.vaga - 1] = {
            numero:dados.vaga,
            morador:{
                nome:dados.nome,
                bloco:dados.bloco,
                apartamento:dados.apto
            },
            veiculo:{
                modelo:dados.veiculo,
                cor:dados.cor,
                placa:dados.placa
            }
        }

        localStorage.setItem('vagas',JSON.stringify(vagas))

        showMensagem("Reservado com sucesso","sucesso",5000)

        alert("Vaga reservada com sucesso")
        
    }

    return (
        <div class="fundo">
            <Header></Header>
            <h1>Cadastro de reservas</h1>
            <Form formName={formName} campos={campos} callback={callback}></Form>
            <Mensagem tipo={tipoMsg} mensagem={mensagem}></Mensagem>
        </div>
    )
}

export default CadastrarReserva;