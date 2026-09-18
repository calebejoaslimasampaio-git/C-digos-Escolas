let aluno =[];
function cadastrarAluno(){
    let nome = document.getElementById('nome').value;
    let matricula= document.getElementById('matricula').value;
    let curso= document.getElementById('curso').value;
    let escola= document.getElementById('escola').value;



   

    // Mostra ao usuario se ele errar
    if(!nome || !matricula || !curso || !escola){
        alert("ERRO, Verifique se há alguma informação faltando ");
        return;
    };
    aluno.push({
        nome:nome,
        matricula:matricula,
        curso:curso,
        escola:escola

    });
    mostrarLista();
};
function mostrarLista(){
    let lista = document.getElementById('listaAlunos');
    let total = document.getElementById('totalAlunoss');
    lista.innerHTML = ""; //limpar a lista
    for(let i = 0;i<aluno.length;i++){
        let alune = aluno[i];
        let item = document.createElement('li');
        item.innerHTML =` <strong> matricula:</strong>${alune.matricula} <strong> Nome:</strong>${alune.nome}<strong>Curso:</strong>${alune.curso} <strong>Escola:</strong>${alune.escola}<span onclick ="removerAluno(${i})" class= "btn-remover" id = x> <strong>  (X) </strong> </span>`;
        lista.appendChild(item);
    };
    total.innerHTML = aluno.length;
};
function removerAluno(a){
    if(confirm('remover aluno')){
        aluno.splice(a, 1); //remover item do array
        mostrarLista();
        atualizarTotal();

    } ; 

}  ;  
function mostrarEstatisticas(){
    if(aluno.length === 0){
        alert('Nenhum Aluno matriculado');
        return;
        let mensagem = `total: ${aluno.length}alunos \n`;
    };
    let com2026=0;
    for(let i=0; i<aluno.length;i++){
        if(aluno[i].matricula.includes('2026')){
            com2026++;
        }//Fecha If
    };//Fecha For
    mensagem +=` Matriculas 2026: ${com2026}`;
    alert(mensagem);
}

function atualizarTotal(){
    document.getElementById('totalAlunoss').textContent = aluno.length;


}
function limparCampos(){
    document.getElementById('matricula').value = '';
    document.getElementById('nome').value = '';
    ducument.getElementById('curso').value = '';
    document.getElementById('escola').value = '';
}    
window.addEventListener('load',function(){
    carregarAlunos();
    atualizarTotal();
    mostrarLista();
});
function entrar(){
    let nome =document.getElementById('nome').value;
  let senha = document.getElementById('senha').value;


}
