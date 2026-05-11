let precoProduto = [];
let precoFinal = 0;
let preco;

while(preco !== 0){
preco = parseFloat(prompt("Preço produto: "));
  precoProduto.push(preco)
}
function somaProdutos(precoFinal, precoProduto){
 for(let i = 0; i < precoProduto.length; i++){
   precoFinal += precoProduto[i];
 }
}
if(precoFinal > 100){
  precoFinal = precoFinal - (precoFinal * 0.1);
  console.log(precoFinal)
}
console.log(precoFinal)
