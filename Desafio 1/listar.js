const num_vagas = 25;

window.onload = async () => {
    let vagas = JSON.parse(localStorage.getItem('vagas')) || [];
    if(vagas.length == 0){
        await init_vagas();
        vagas = JSON.parse(localStorage.getItem('vagas'))
    }
    console.log(vagas)
    let tbody = document.getElementById('body-lista');
    tbody.innerHTML = '';
    vagas.forEach(vaga=>{
        tbody.innerHTML = tbody.innerHTML+`
        <tr>
            <td>${vaga.vaga.toString().padStart(2,0)}</td>
            <td><span class="${vaga.nome!=''?'reservado':'livre'}">${vaga.nome!=''?'Reservado':'Livre'}</span></td>
            <td>${vaga.nome}</td>
            <td> ${vaga.bloco!=''?'BL'+vaga.bloco:''} ${vaga.apto!=''?'APT'+vaga.apto:''}</td>
            <td>${vaga.veiculo} ${vaga.cor} ${vaga.placa!=''?' - '+vaga.placa:''}</td>
        </tr>
        `
    })
    
}

async function init_vagas(){
    let n_vagas = localStorage.getItem('num_vagas');
    if(!n_vagas){
        localStorage.setItem('num_vagas',num_vagas);
        n_vagas = num_vagas;
    }
    let vagas = localStorage.getItem('vagas');
    if(!vagas || vagas.length == 0){
        let listaVagas = [];
        for(var i = 1;i<=n_vagas;i++){
            listaVagas.push({
                vaga:i,
                nome:'',
                apto:'',
                bloco:'',
                veiculo:'',
                placa:'',
                cor:'',
            })
        }
        localStorage.setItem('vagas',JSON.stringify(listaVagas));
        console.log("Atualizado lista de vagas com as seguintes vagas:")
        console.log(listaVagas)
    }else{
        console.log('Vagas já preenchidas');
    }
}
    
