// Sistema de Tarifas de Transporte Intermunicipal
let nomePassageiro = prompt("Qual o nome do passageiro? ");
let categoriaPassageiro = prompt("Qual a categoria do passageiro? ");
let destinoValor = prompt("Qual o destino do passageiro? ");
let quantidadePassageiros = prompt("Qual a quantidade de passageiros? ");
let preçoSubtotal = destinoValor * quantidadePassageiros;

switch(categoriaPassageiro){
  case "adulto":
    
