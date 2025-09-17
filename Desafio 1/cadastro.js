const num_vagas = 25;
function onSubmitForm(e){
    e.preventDefault();
    let dados = getFormulario();
    if(isDadosValidos(dados)){
        let vagas = JSON.parse(localStorage.getItem('vagas')) || [];

        if(vagas.filter(v=>v.vaga == dados.vaga && v.nome != '').length==0){ //Vaga disponível
            let index = vagas.findIndex(v=>v.vaga == dados.vaga);
            if(index == null){
                console.log(index)
                mostraMensagem("Vaga não encontrada","erro");
                return;
            }
            vagas[index] = dados;

            localStorage.setItem('vagas',JSON.stringify(vagas));
    
            console.log(vagas);
            alert("Cadastrado com sucesso!");
            mostraMensagem("Reserva adicionada com sucesso","sucesso");
        }else{
            formataInvalido('vaga',false);
            mostraMensagem("Vaga indisponível, escolha outra","erro");
        }
    }else{
        mostraMensagem("Campos obigatórios não preenchidos ou com dados inválidos","erro");
    }
}



function getFormulario(){
    let form = {
         vaga:document.getElementById('vaga').value,
         nome:document.getElementById('nome').value,
         apto:document.getElementById('apto').value,
         bloco:document.getElementById('bloco').value,
         veiculo:document.getElementById('veiculo').value,
         placa:document.getElementById('placa').value,
         cor:document.getElementById('cor').value,
    }

    return form;    
}

function isDadosValidos(dados){
    let valid = true;
    for(const [key,value] of Object.entries(dados)){
        if(!value || value == ''){
            valid = false;
            formataInvalido(key,false);
        }else{
            formataInvalido(key,true);
        }
    }
    if(dados.vaga <=0 || dados.vaga > num_vagas){
        valid = false;
        formataInvalido('vaga',false);
    }

    if(dados.apto <= 0){
        valid = false;
        formataInvalido('apto',false);
    }

    if(dados.bloco <= 0){
        valid = false;
        formataInvalido('bloco',false);
    }

    if(dados.placa.length != 7){
        valid = false;
        formataInvalido('placa',false);
    }

    
    return valid;
}

function formataInvalido(chave,valido){
    let doc = document.getElementById(chave);
    if(valido){
        doc.closest('div').classList.remove("invalido");
    }else{
        doc.closest('div').classList.add("invalido");
    }
}

function mostraMensagem(mensagem,tipo){
    //Captura o elemento
    let div = document.getElementById('mensagem');
    //Remove os estilos
    div.classList.remove('sucesso');
    div.classList.remove('erro');
    //Adiciona a mensagem e o estilo atual
    div.innerText = mensagem;
    div.classList.add(tipo);
    setTimeout(()=>{
        //let div = document.getElementById('mensagem');
        div.innerText = '';
    },3000)
}


function removerReservas(){
    if(confirm("Você tem certeza que deseja limpar as reservas?")){
        localStorage.clear();
    }
}
