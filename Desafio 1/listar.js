
window.onload = () => {
    let vagas = JSON.parse(localStorage.getItem('vagas')) || [];
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

    
