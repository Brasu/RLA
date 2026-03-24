let nomePassageiro = prompt("Qual o nome do passageiro? ");
let quantidadePassageiros = parseInt(prompt("Qual a quantidade de passageiros? "));

if (quantidadePassageiros <= 5){
  
  switch(quantidadePassageiros) {
    case 1:
console.log("Categoria do passageiro: \n1 - Adulto \n2 - Estudante \n3 - Idoso \n4 - Criança menor de 5 anos");
let categoriaPassageiro = parseInt(prompt("Qual a categoria do passageiro? "));

let desconto, destinoValor, mensagemEmbarque;

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

if (categoriaPassageiro == 1 || categoriaPassageiro == 2 || categoriaPassageiro == 3 || categoriaPassageiro == 4){
    
console.log("Opções Destino: \n1 - Destino A \n2 - Destino B \n3 - Destino C \n4 - Destino D");
let destino = parseInt(prompt("Qual o destino do passageiro? "));

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

if (destino == 1 || destino == 2 || destino == 3 || destino == 4){
    
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
}
}
      break;
    case 2: 
  console.log("Categoria do passageiro: \n1 - Adulto \n2 - Estudante \n3 - Idoso \n4 - Criança menor de 5 anos");
let categoriaPassageiro = parseInt(prompt("Qual a categoria do passageiro? "));
let categoriaPassageiro2 = parseInt(prompt("Qual a categoria do passageiro? "));
      
let desconto, destinoValor, mensagemEmbarque;

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
switch(categoriaPassageiro2){
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
if (categoriaPassageiro == 1 || categoriaPassageiro == 2 || categoriaPassageiro == 3 || categoriaPassageiro == 4 && categoriaPassageiro2 == 1 || categoriaPassageiro2 == 2 || categoriaPassageiro2 == 3 || categoriaPassageiro2 == 4){
    
console.log("Opções Destino: \n1 - Destino A \n2 - Destino B \n3 - Destino C \n4 - Destino D");
let destino = parseInt(prompt("Qual o destino do passageiro? "));

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

if (destino == 1 || destino == 2 || destino == 3 || destino == 4){
    
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
console.log("Passageiro:", nomePassageiro2,"\nQuantidade de passagens:", quantidadePassageiros, "\nDestino:", Destino,"\nEmbarque:", mensagemEmbarque, "\nTipo de desconto:", tipoDesconto, "\nValor total R$:", preçoSubtotal,"\nDesconto:",valorDesconto, "\nValor a pagar R$:",preçoTotal);
preçoTotal < 100 ? console.log("Pagamento à vista.") : console.log("Parcelável em até 3X sem juros.");
}
}
  } else
  console.log("Quantidade de passageiros acima do limite possível de compra.")
