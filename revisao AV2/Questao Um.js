let nomeMes, valorGastoMensal;
let gastoAnual;

for(let ano = 1; ano >= 1 && ano <= 12; ano++){
  nomeMes = prompt("Mês: ");
  valorGastoMensal = parseFloat(prompt("Gasto: "));

  gastoAnual += valorGastoMensal;
}
console.log(gastoAnual.toFixed(2));
  
