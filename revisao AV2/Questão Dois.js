let bilheteTotolec, diferençaMeta;
let valorTotal = 0;

while(true){
  bilheteTotolec = parseInt(prompt("Quantidade Totolec: "));
  if(bilheteTotolec == 0){
    break;
  }
valorTotal += bilheteTotolec;  

}
console.log()
console.log("No dia 15/05/2026 foram vendidos", valorTotal, "Totolecs.");

console.log()
if (valorTotal >= 120){
  console.log("Você bateu sua meta do dia.");
} else if (valorTotal < 120) {
  diferençaMeta = 120 - valorTotal
  console.log("Você não bateu sua meta do dia hoje. Amanhã você deverá vender", diferençaMeta,"a mais que sua meta diária");
}
