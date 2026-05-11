const valorBase = parseFloat(prompt("Preço primeiro bilhete: "));
const numeroBilhete = parseInt(prompt("Número do bilhete desejado: "));
const valorAumento = parseFloat(prompt("Valor aumento de preço: "));

function calcularPrecoBilhete(valorBase, valorAumento, numeroBilhete){
 return valorBase + (numeroBilhete - 1) * valorAumento;
}
console.log()

calcularPrecoBilhete(valorBase, valorAumento, numeroBilhete);
console.log(calcularPrecoBilhete(valorBase, valorAumento, numeroBilhete).toFixed(2));

if(calcularPrecoBilhete(valorBase, valorAumento, numeroBilhete) > 500) {
  console.log("Lote VIP atingido.");
} else {
  console.log("Venda confirmada no lote padrão.");
}
