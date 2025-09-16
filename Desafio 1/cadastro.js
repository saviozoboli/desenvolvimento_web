function onSubmitForm(){
    event.preventDefault();
    let dados = getFormulario();
    if(isDadosValidos(dados)){
        let vagas = JSON.parse(localStorage.getItem('vagas')) || [];

        vagas.push(dados);

        localStorage.setItem('vagas',JSON.stringify(vagas));

        console.log(vagas);
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
