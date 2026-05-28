class monstro{
    constructor(noe,hp){
        this.nome = nome;
        this.hp = Number(hp);

    }
    receberDano(quantidade){
        this.hp -= quantidade;
        if(this.hp <=0){
            this.hp =0;
            return `${this.nome} foi derrotado`;
            }
            return `${this.nome} sofre ${quantidade} de dano!`;

    }
}
let monstroBatalha;
function iniciarJogo(){

    const nome = document.getElementById('nomeMonstro').value;
    const hp = document.getElementById('hpMontro').value;
monstroBatalha = new monstro(nome, hp);

function atualizaTela(){
    document.getElementById();
}

}