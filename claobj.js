class heroi{
    constructor(nome,classe){
        this.nome = nome;
        this.classe=classe;
    }
}
function criarHeroi(){
    // Capturando o que o usuário digitou/selecionou na tela
    const nomeDigitado = document.getElementById('nomeInput').value;
    const classeSelecionada = document.getElementById('classeSelect').value;
    // Criando o objeto dinamicamente com os valores dos campos
    const novoHeroi= new heroi(nomeDigitado, classeSelecionada);

    document.getElementById('resultado').style.display = "block"
    document.getElementById('dadoHeroi').innerHTML =`
    nome: <strong>${novoHeroi.nome}</strong><br>
    <strong>Classe:</strong> ${novoHeroi.classe}
    `;
    
    }