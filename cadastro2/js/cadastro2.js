//URL do servidor local que o outro professor irá fornecer
const API_URL = '';
let alunos = [];

// async vai sicronizar com o banco
async function carregarAlunos(){
    try{
        const resposta = await fetch(API_URL);
        if(resposta.ok){
            // o .json() faz o papel do JSON.parse
            alunos = await resposta.json();
            mostrarLista();
            atualizarTotal();

        }
    }catch (erro){
        console.error("Erro ao conectar com o servidor local:",erro);
    }

}  