import React from "react";
import Header from "../../components/header/header";
import Table from "../../components/table/table"
import './listar-vagas.css'

const ListarVagas = () => {


  function retornarVagas(){
     let vagas = JSON.parse(localStorage.getItem('vagas'))
    // let vagas = null;
    if(!vagas){
      vagas = populaVagasVazias()
      localStorage.setItem('vagas',JSON.stringify(vagas))
    }
    return vagas;
  }

  function populaVagasVazias(){
    const qtdVagas = 25;
    let vagas = []

    for(let i=1;i<=qtdVagas;i++){
      vagas.push({
        numero:i,
        veiculo:null,
        morador:null
      })
    }
    return vagas;
  }

  function geraTabela(vagas){
    const cabecalho = ['Numero','Situacao','Morador','Apartamento','Veículo','Placa']
    let linhas = []
    vagas.forEach(vaga=>{

      let ocupada = vaga.veiculo != null
      let morador = vaga.morador?vaga.morador.nome:''
      let apartamento = vaga.morador?vaga.morador.bloco+"/"+vaga.morador.apartamento:''
      let veiculo = vaga.veiculo?vaga.veiculo.modelo+"/"+vaga.veiculo.cor:''
      let placa = vaga.veiculo?vaga.veiculo.placa:''


      linhas.push([vaga.numero,ocupada?"Ocupada":"Livre",morador,apartamento,veiculo,placa])
    })
    return {
      cabecalho,
      linhas
    }
  }


  const vagas = retornarVagas();

  const table = geraTabela(vagas);



  return (
    <div className="fundo">
      <Header />
      <h1>Vagas no condomínio</h1>
      <Table dados={table}></Table>
    </div>
  );
};

export default ListarVagas;
