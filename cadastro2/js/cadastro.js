let alunos = [];  // Lista VAZIA de alunos


// ===== NOVA FUNÇÃO: CARREGAR AO ABRIR PÁGINA =====
function carregarAlunos(){
    const salvos = localStorage.getItem('alunosApp');
    if (salvos){
        alunos = JSON.parse(SALVOS);
    }
}


function atualizarTotal() {
    document.getElementById('totalAlunos').textContent = alunos.length;
}

function cadastrarAluno() {
    let matricula = document.getElementById('matricula').value;
    let nome = document.getElementById('nome').value;
    
    // Validação SIMPLES (revisão if)
    if (!matricula || !nome) {
        alert('Preencha todos os campos!');
        return;
    }
    
    // ADICIONA no array (posição automática)
    alunos.push({
        matricula: matricula,
        nome: nome
    });

    console.log(alunos)
    
     // Array → String JSON
    mostrarLista();
    atualizarTotal();
    limparCampos();
}

function mostrarLista() {
    let lista = document.getElementById('listaAlunos');
    lista.innerHTML = '';  // Limpa lista antiga
    
    // LOOP lê cada posição do array
    for(let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];
        
        let item = document.createElement('li');
        item.innerHTML = `
            <strong>${aluno.matricula}</strong> - ${aluno.nome}
            <span onclick="removerAluno(${i})" class="btn-remover">rem</span>
        `;
        lista.appendChild(item);
    }
}

function removerAluno(indice) {
    if (confirm('Remover este aluno?')) {
        alunos.splice(indice, 1);  // Remove 1 item na posição 'indice'
        mostrarLista();
        atualizarTotal();
    }
}

function mostrarEstatisticas() {
    if (alunos.length === 0) {
        alert('Nenhum aluno cadastrado!');
        return;
    }
    
    let mensagem = `Total: ${alunos.length} alunos\n`;
    
    // Conta matrículas com "2024"
    let com2024 = 0;
    for(let i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula.includes('2024')) {
            com2024++;
        }
    }
    
    mensagem += `Com matrícula 2024: ${com2024}`;
    alert(mensagem);
}

function limparCampos() {
    document.getElementById('matricula').value = '';
    document.getElementById('nome').value = '';
}

/*// ===== CARREGA AUTOMATICAMENTE QUANDO PÁGINA ABRE (NOVA LINHA) =====**/
window.addEventListener('load', function(){

    carregarAlunos();
    atualizarTotal();
    mostrarLista();
});
