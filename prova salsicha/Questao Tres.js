const valorBase = parseFloat(prompt("Preço primeiro bilhete: ")):
const numeroBilhete = parseInt(prompt("Número do bilhete desejado: "));
const valorAumento = parseFloat(prompt("Valor aumento de preço: "));

function calcularPrecoBilhete(valorBase, valorAumento, numeroBilhete){
  valorBase + (numeroBilhete - 1) * valorAumento;
}

calcularPrecoBilhete(valorBase, valorAumento, numeroBilhete);
console.log(calcularPrecoBilhete(valorBase, valorAumento, numeroBilhete))
  
