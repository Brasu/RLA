let estacoes = prompt("Digite um mês: ");
if (estacoes === "dezembro" || estacoes === "janeiro" || estacoes === "fevereiro") {
console.log("É verão!")
} else if (estacoes === "março" || estacoes === "abril" || estacoes === "maio") {
console.log("É outono!")
} else if (estacoes === "junho" || estacoes === "julho" || estacoes === "agosto") {
console.log("É inverno!")
} else if (estacoes === "setembro" || estacoes === "outubro" || estacoes === "novembro") {
console.log("É primavera!")
}
else {
console.log("Mês inválido.")
}
