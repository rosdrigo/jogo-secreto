let listaDeNumerosSorteados =[];
let numeroLimite = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirtextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}
function verificarChute() {
    let chute = document.querySelector(`input`).value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1? "tentativa" : "tentativas";
        let mensagemTentativa = `Parabéns, você é muito sortudo e acertou com ${tentativas} ${palavraTentativa}!`;
        exibirtextoNaTela(`h1`, "ACERTOU!");
        exibirtextoNaTela(`p`,mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute < numeroSecreto) {
            exibirtextoNaTela(`h1`, "ERROU");
            exibirtextoNaTela(`p`, `Seu número secreto é maior que ${chute}`);
        } else {
            exibirtextoNaTela(`p`, `Seu número secreto é menor que ${chute}`);
        }

    }
    limparCampo();
    tentativas++;

}

exibirtextoNaTela(`h1`, "Jogo do Número Secreto");
exibirtextoNaTela(`p`, "Digite um número de 1 a 100");

function numeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista===100){
        listaDeNumerosSorteados =[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;

    }

}
function limparCampo(){
    chute = document.querySelector(`input`)
    chute.value;
}

