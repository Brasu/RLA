
let saldoIncial = 1000;
let operaçao;
let resultado = 0;
while(operaçao !== 0){
    
console.log("=== MENU === \n1-Depositar \n2-Sacar \n3-Consultar saldo \n0-Sair");
operaçao = parseInt(prompt("Qual operação deseja fazer? "));

switch(operaçao){
  case 1:
    operaçaoTipo = "Saque";
    if(resultado > 0 ){
    console.log("saque realizado:",valorOperaçao - saldoInicial);}
    valorOperaçao = parseFloat(prompt("Qual o valor da operação? "));
    break;
  case 2:
    operaçaoTipo = "Depósito";
    console.log("Operação Selecionada:", operaçaoTipo)
    valorOperaçao = parseFloat(prompt("Qual o valor da operação? "));
    break;
  case 3:
    operaçaoTipo = "Consultar saldo";
    console.log("Operação Selecionada:", operaçaoTipo);
    break;
  default:
    condole.log("Operação inválida.")
}

}