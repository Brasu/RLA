// Sistema de Tarifas de Transporte Intermunicipal 
let nomePassageiro = prompt("Qual o nome do passageiro? ");
console.log("Categoria do passageiro (1 - Adulto, 2 - Estudante, 3 - Idoso, 4 - Criança menor de 5 anos)");
let categoriaPassageiro = parseInt(prompt("Qual a categoria do passageiro? "));
console.log("Destino (1 - Destino A: R$ 45,00 / 2 - Destino B: R$ 72,00 / 3 - Destino C: R$ 110,00 / 4 - Destino D: R$ 138,00)");
let destinoValor = parseInt(prompt("Qual o destino do passageiro? "));
let quantidadePassageiros = prompt("Qual a quantidade de passageiros? ");
let preçoSubtotal = destinoValor * quantidadePassageiros;

switch(categoriaPassageiro){
  case 1:

    break;
  case 2:

    break;
  case 3:

    break;
  case 4:

    break;
  default:
    console.log("Categoria inválida.")
}
switch(destinoValor){
  case 1:

    break;
  case 2:

    break;
  case 3:

    break;
  case 4:

    break;
  default:
    console.log("Destino inválido.")
}
    
