const nomeExercicio = prompt("Qual o nome do exercício? ");
const caloriasQueimadas = parseFloat(prompt("Quantas calorias são queimadas por minuto? "));
let caloriasQueimadasTotais = 0;
  
for(let timer = 1; timer >= 1 && timer <= 10; timer++){

caloriasQueimadasTotais = caloriasQueimadasTotais + caloriasQueimadas;

console.log("Para o exercício", nomeExercicio+", no minuto", timer+":", caloriasQueimadasTotais, "calorias acumuladas gastas.")
}
