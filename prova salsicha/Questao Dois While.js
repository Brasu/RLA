const precoProdutos = [];
let precoProduto;

function somarProdutos(precos, valorAdicional){
 let soma = 0;
 for(let indiceAtual = 0; indiceAtual < precos.length; indiceAtual++){
   soma += precos[indiceAtual];
 }
 return soma;
}

function calcularValorDesconto (valorTotal){
if(valorTotal < 100){
    return 0;
 }
 return valorTotal * 0.1;
}

while(precoProduto !== 0){
precoProduto = parseFloat(prompt("Preço produto: "));
  precoProdutos.push(precoProduto)
}

const valorTotalCompra = somarProdutos(precoProdutos);
console.log("Valor total da compra: R$", valorTotalCompra);

const valorDesconto = calcularValorDesconto(valorTotalCompra);
console.log("Valor de desconto: R$", valorDesconto);
console.log("Valor a pagar: R$", valorTotalCompra - valorDesconto);
