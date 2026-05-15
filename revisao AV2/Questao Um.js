let nomeMes, valorGastoMensal;
let gastoAnual = 0;

for(let ano = 1; ano >= 1 && ano <= 12; ano++){
  nomeMes = prompt("Mês: ");
  valorGastoMensal = parseFloat(prompt("Gasto: R$ "));

  gastoAnual += valorGastoMensal;
}
console.log(gastoAnual.toFixed(2));
  
