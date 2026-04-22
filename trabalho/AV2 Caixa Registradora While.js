let quantidadeProdutos = 0;
let preçoFinal = 0;
let maiorPreço = 0;

let preçoProduto;

while(preçoProduto !== -1){
  
    quantidadeProdutos++;
    preçoProduto = parseFloat(prompt("Preço do produto: "));
    preçoFinal = preçoProduto + preçoFinal;
  
 if(preçoProduto > maiorPreço){
     maiorPreço = preçoProduto
 }
    
}
 console.log()
 console.log("Produtos:", quantidadeProdutos);
 console.log("Total:" , preçoFinal);
 console.log("Produto mais caro:", maiorPreço);
