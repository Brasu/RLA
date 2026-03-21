let nomeCorrentista = prompt("Qual o nome do correntista? ");
console.log("Tipos de conta: \n1-Conta Corrente \n2-Conta Poupança \n3-Conta Salário");
let tipoConta = parseInt(prompt("Qual o tipo de conta? "));
console.log("Operações possíveis: \n1-Saque \n2-Depósito \n3-Consultar Saldo");
let operaçao = parseInt(prompt("Qual a operação desejada? "));
    saldoAtual = parseFloat(prompt("Qual o saldo atual da conta? "));

let contaSaqueMax, operaçaoTipo, saldoFinal, mensagem, valorOperaçao, saldoAtual;

console.log("-------");

switch(tipoConta){
  case 1:
    contaSaqueMax = 3000;
    break;
  case 2:
    contaSaqueMax = 1500;
    break;
  case 3:
    contaSaqueMax = 2000;
    break;
  default:
    console.log("Tipo de conta inválido.")
}

switch(operaçao){
  case 1:
    operaçaoTipo = "Saque";
    console.log("Operação Selecionada:", operaçaoTipo)
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

switch(true){
  case operaçao === 1 && valorOperaçao > saldoAtual:
    console.log("Saque negado --- saldo insuficiente.");
    break;
  case operaçao === 1 && valorOperaçao > contaSaqueMax:
    console.log("Saque negado --- valor acima do limite diário.");
    break;
  case operaçao === 1 && valorOperaçao <= contaSaqueMax:
    saldoFinal = saldoAtual - valorOperaçao;
    console.log("Saldo atual:", saldoFinal.toFixed(2));
    console.log("Saque realizado com sucesso.");
    mensagem = saldoFinal > 0 ? "Saldo positivo." : "Saldo zerado/negativo.";
    console.log(mensagem);
    break;
  case operaçao === 2:
    saldoFinal = saldoAtual + valorOperaçao;
    console.log("Saldo atual:", saldoFinal.toFixed(2));
    console.log("Depósito realizado com sucesso.");
    mensagem = saldoFinal > 0 ? "Saldo positivo." : "Saldo zerado/negativo.";
    console.log(mensagem);
    break;
  case operaçao === 3:
    console.log("Saldo atual:", saldoAtual.toFixed(2));
    mensagem = saldoAtual > 0 ? "Saldo positivo." : "Saldo zerado/negativo.";
    console.log(mensagem)
}
