let vp = parseFloat(prompt("Qual o valor da sua compra? "));
if (vp >= 200) {
   console.log("O que deve pagar:", vp - (vp * 10) / 100)
}
if (vp < 200) {
console.log("O que deve pagar:", vp)
}
