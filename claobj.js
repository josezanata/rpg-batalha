class heroi{
    constructor(nome,classe){
        this.nome = nome;
        this.classe = classe;
        this.nivel = this.nivel;
    }
}
function criarHeroi(){
    // Capturando o que o usuário digitou/selecionou na tela
    const nomeDigitado = document.getElementById('nomeInput').value;
    const classeSelecionada = document.getElementById('classeSelect').value;

    // cap q usu captou
    const nivelDigitado = document.getElementById('nivelInput').value;

    // Criando o objeto dinamicamente com os valores dos campos
    const novoHeroi= new heroi(nomeDigitado, classeSelecionada, nivelDigitado);

    document.getElementById('resultado').style.display = "block"
    document.getElementById('dadoHeroi').innerHTML =`
    <strong>Nome:</strong>${novoHeroi.nome}<br>
    <strong>Classe:</strong> ${novoHeroi.classe}<br>
    <strong>Nivel:</strong>${novoHeroi.nivel}
    `;
    
}