// && =e  ||=ou    !(a==b) se a nao for igual a b
alert("boas vindas ao jogo numero secreto");
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
   chute = prompt(`escolha um numero entre 1 e &{numeroMaximo}`);
    if (chute == numeroSecreto){
        break;
    }else{
        if(numeroSecreto > chute){
            alert (`o numero secreto é maior que ${chute}`);
        }else{
                alert (`o numero secreto é menor que ${chute}`);
            }
           // tentativas = tentativas + 1;
           tentativas ++;
        }  
    
    }
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    alert(`parabens, voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
   /* if(tentativas>1){
        alert(`parabens, voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    }else{
        alert(`parabens, voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
    }*/