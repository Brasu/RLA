let hora = parseFloat(prompt("Que horas são? "));
if (hora >= 5 && hora < 13) {
console.log("Bom dia!")
}
if (hora >= 13 && hora < 19) {
console.log("Boa tarde!")
}
if (hora >= 19 && hora < 24 || hora >= 0 && hora < 5) {
console.log("Boa noite!")
}
