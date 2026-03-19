// Sistema de Tarifas de Transporte Intermunicipal 
let nomePassageiro = prompt("Qual o nome do passageiro? ");
console.log("Categoria do passageiro (1 - Adulto, 2 - Estudante, 3 - Idoso, 4 - Criança menor de 5 anos)");
let categoriaPassageiro = parseInt(prompt("Qual a categoria do passageiro? "));
console.log("Destino (1 - Destino A: R$ 45,00 / 2 - Destino B: R$ 72,00 / 3 - Destino C: R$ 110,00 / 4 - Destino D: R$ 138,00)");
let destino = parseInt(prompt("Qual o destino do passageiro? "));
let quantidadePassageiros = prompt("Qual a quantidade de passageiros? ");
let desconto, destinoValor;

switch(categoriaPassageiro){
  case 1:
desconto = 0
    break;
  case 2:
desconto = 50
    break;
  case 3:
desconto = 50
    break;
  case 4:
desconto = 100
    break;
  default:
    console.log("Categoria inválida.")
}
switch(destino){
  case 1:
destinoValor = 45
    break;
  case 2:
destinoValor = 72
    break;
  case 3:
destinoValor = 110
    break;
  case 4:
destinoValor = 138
    break;
  default:
    console.log("Destino inválido.")
}

let preçoSubtotal = destinoValor * quantidadePassageiros;
let valorDesconto = preçoSubtotal * (desconto / 100);
let preçoTotal = preçoSubtotal - valorDesconto;

preçoTotal < 100 ? console.log("Pagamento à vista.") : console.log("Parcelável em até 3X sem juros.");
 switch(true){
   case preçoTotal(=0):
     console.log("Embarque gratuito liberado.");
     break;
   case preçoTotal(<100):
     console.log("Dirija-se ao guichê para pagamento.");
     break;
   case preçoTotal(>100 && <200):
     console.log("Pagamento via terminal disponível.");
     break;
   case preçoTotal(>=200):
     console.log("Atendimento priorit´ario no guich^e VIP.");
     break;
 }
console.log("
