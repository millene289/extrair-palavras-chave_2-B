 import {PLAVRAS_RUINS} from "./palavrasruins.js";

 const BotaoMostraPalavras = document.querySelector ('#botao-palavrachave');

BotaoMostraPalavras.addEventListener ('click',MostraPalavrasChave);

function MostraPalavrasChave () {
 const texto = document.querySelector ('entrada-de-texto').value;
 const campoRsultade=document.querySelector('#resultado-palavrachave');
 const palavraChave=processaTexto(texto);

  campoResultado.textContent=palavraChave.join(",");
}

  function processaTexto (texto) {
    let palavras = texto.split(/\P {L}+/u);
  }