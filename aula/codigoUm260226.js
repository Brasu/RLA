let peso = parseFloat(prompt("Peso: "));
let altura = parseFloat(prompt("Altura: "));
let imc = peso / (altura**2);
if (imc < 18) {
console.log("Abaixo do peso!")
}
if (imc >= 18 && imc < 25) {
console.log("Peso normal!")
}
if (imc >= 25) {
console.log("Sobrepeso!")
}
