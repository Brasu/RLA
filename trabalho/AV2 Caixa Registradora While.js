let quantidadeProdutos = 0;
let preçoFinal = 0;
let maiorPreço = 0;

let preçoProduto;

while(true){
 
 preçoProduto = parseFloat(prompt("Preço do produto: "));
 if(preçoProduto === -1){
     break;
 }
    quantidadeProdutos++;
    preçoFinal = preçoProduto + preçoFinal;

 if(preçoProduto > maiorPreço){
     maiorPreço = preçoProduto
 }

}
 console.log()
 console.log("Produtos:", quantidadeProdutos);
 console.log("Total:" , preçoFinal.toFixed(2);
 console.log("Produto mais caro:", maiorPreço.toFixed(2);
