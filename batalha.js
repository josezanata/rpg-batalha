function lutar(){
    const classe =  document.getElementById('classe').value;
    const arma =  document.getElementById('arma').value.trim();
    const log =  document.getElementById('log');

    log.innerHTML = "voce esqueceu a arma"

    Math.floor(Math.random()*20)+1;
    let resultado = `dado: ${dado} | <strong>${classe}</strong>${arma}</strong>`;

        switch(classe){
            case"guerreiro":
            if(arma.tolowerCase()==="espada" && dado>7){
                resultado += "<spam classe='sucesso'> SUCESSO:voce acertou ele</span>"
                
            }else if(dado >15){
                resultado += "<span class='sucesso'> vitoria: voce destrui ele</span>"
            
            }else{
                resultado += "<span class='derota'> fez a escolha errada, e levou um golpe na cara</span>"
            }
            break;

            case "mago":
                if(arma.tolowerCase()==="cajado" && dado>7){
                    resultado += "<spam classe='sucesso'> SUCESSO:voce acertou ele</span>"
                }

        }


}