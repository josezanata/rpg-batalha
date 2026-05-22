function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');
    
    if(!arma){
    log.innerHTML= "❌ Você esqueceu de equipar uma arma";
    return;}
    
    const dado = Math.floor(Math.random()*20)+1;
    let resultado = `🎲 Dado: ${dado} |
    <strong>${classe}</strong> com <strong>${arma}</strong>`;
    
        switch(classe){
            case "guerreiro":
            if(arma.toLowerCase()==="espada" && dado>10){
                resultado += "<span class='sucesso'> SUCESSO:Você decapitou o monstro com um golpe</span>"
                
            }else if(dado >15){
                resultado += "<span class='sucesso'> VITÓRIA: na força bruta, você esmagou o inimigo</span>"
                
            }else{
                resultado += "<span class='derrota'>FALHA: O mostro foi mais rápido. Sua"+ arma+ "ficou presa no chão!</span>"
                }
            break;
                
            case "mago":
            if(arma.toLowerCase() === "cajado" && dado > 17){
                resultado += "<span span class= 'critico'>CRITICO:Seu cajado criou um bola de fogo e fritou o inimigo</span>"
            
            }else if(dado >20){
                resultado += "<span class='sucesso'> VITÓRIA: sua agia acerta o inimigo e lança ele pra traz</span>"
                
            }else{
                resultado += "<span class='derrota'>FALHA: sua magia falha que nem u broxa, e ele te acerta em cheio</span>"
                }
            break;

            case "arqueiro":
            if(arma.toLowerCase() === "arco" && dado > 7){
                resultado += "<span span class= 'critico'>CRITICO: sua flecha faz um buraco no peito dele</span>"
            
            }else if(dado >4){
                resultado += "<span class='sucesso'> VITÓRIA: vc aranca um embro de seu corpo</span>"
                
            }else{
                resultado += "<span class='derrota'>FALHA: vc erra e ele ataca vc, e vc desvia </span>"
                }
            break;

            default:
                resultado

            log.innerHTML = resultado;
                
        }

}