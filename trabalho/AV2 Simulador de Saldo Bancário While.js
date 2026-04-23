let saldoInicial = 1000;
let operaçao, valorOperaçao;
let quantidadeOperaçoes = 0;

while(true){
    
console.log("=== MENU === \n1-Depositar \n2-Sacar \n3-Consultar saldo \n0-Sair");
operaçao = parseInt(prompt("Qual operação deseja fazer? "));
console.log()

if(operaçao === 0){
    break;
}

switch(operaçao){
  case 1:
        
    console.log("Operação Selecionada: Depositar");
    valorOperaçao = parseFloat(prompt("Valor do depósito: "));
    saldoInicial = saldoInicial + valorOperaçao;
    console.log("Depósito realizado. Saldo:", saldoInicial.toFixed(2));
    console.log();
    break;
    
  case 2:
        
    console.log("Operação Selecionada: Sacar")
    valorOperaçao = parseFloat(prompt("Valor do saque: "));
    if(valorOperaçao > saldoInicial){
        console.log("Saldo insuficiente!");
    } else {
    saldoInicial = saldoInicial - valorOperaçao;
    console.log("Saque realizado. Saldo:", saldoInicial.toFixed(2));
}
    console.log();
    break;
    
  case 3:
        
    console.log("Operação Selecionada: Consultar saldo");
    console.log("Saldo atual:", saldoInicial.toFixed(2));
    console.log();
    break;
}
quantidadeOperaçoes++;
}
console.log();
console.log("Operação realizada: Sair");
console.log("Saldo final:", saldoInicial.toFixed(2));
console.log("Operações realizadas:", quantidadeOperaçoes);
