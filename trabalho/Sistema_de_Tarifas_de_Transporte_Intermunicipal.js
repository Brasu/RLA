let nomePassageiro = prompt("Qual o nome do passageiro? ");
console.log("Categoria do passageiro: \n1 - Adulto \n2 - Estudante \n3 - Idoso \n4 - Criança menor de 5 anos");
let categoriaPassageiro = parseInt(prompt("Qual a categoria do passageiro? "));
console.log("Opções Destino: \n1 - Destino A \n2 - Destino B \n3 - Destino C \n4 - Destino D");
let destino = parseInt(prompt("Qual o destino do passageiro? "));
let quantidadePassageiros = prompt("Qual a quantidade de passageiros? ");
let desconto, destinoValor, mensagemEmbarque;
// definições
switch(categoriaPassageiro){
  case 1:
desconto = 0
    tipoDesconto = "Adulto"
    break;
  case 2:
desconto = 50
    tipoDesconto = "Estudante"
    break;
  case 3:
desconto = 50
    tipoDesconto = "Idoso"
    break;
  case 4:
desconto = 100
    tipoDesconto = "Criança"
    break;
  default:
    console.log("Categoria inválida.")
}
switch(destino){
  case 1:
destinoValor = 45
Destino = "Destino A"
    break;
  case 2:
destinoValor = 72
Destino = "Destino B"
    break;
  case 3:
destinoValor = 110
Destino = "Destino C"
    break;
  case 4:
destinoValor = 138
Destino = "Destino D"
    break;
  default:
    console.log("Destino inválido.")
}
// contas
let preçoSubtotal = destinoValor * quantidadePassageiros;
let valorDesconto = preçoSubtotal * (desconto / 100);
let preçoTotal = preçoSubtotal - valorDesconto;

 switch(true){
   case preçoTotal == 0:
    mensagemEmbarque = "Embarque gratuito liberado.";
     break;
   case preçoTotal < 100:
     mensagemEmbarque = "Dirija-se ao guichê para pagamento.";
     break;
   case preçoTotal < 200:
     mensagemEmbarque = "Pagamento via terminal disponível.";
     break;
   case preçoTotal >= 200:
     mensagemEmbarque = "Atendimento prioritário no guichê VIP.";
     break;
 }
 
console.log("-----COMPROVANTE-----");
console.log("Passageiro:", nomePassageiro,"\nQuantidade de passagens:", quantidadePassageiros, "\nDestino:", Destino,"\nEmbarque:", mensagemEmbarque, "\nTipo de desconto:", tipoDesconto, "\nValor total R$:", preçoSubtotal,"\nDesconto:",valorDesconto, "\nValor a pagar R$:",preçoTotal);
preçoTotal < 100 ? console.log("Pagamento à vista.") : console.log("Parcelável em até 3X sem juros.");
