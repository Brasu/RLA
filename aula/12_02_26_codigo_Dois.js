let v1 = parseInt(prompt("Digite um número: "));
let v2 = parseInt(prompt("Digite um número: "));
let v3 = parseInt(prompt("Digite um número: "));
let delta = (v2**2 - 4 * v1 * v3);
let x1 = (-v2 + Math.sqrt(delta) / (2 * v1));
let x2 = (-v2 - Math.sqrt(delta) / (2 * v1));
console.log("Valor de X1:", x1, "Valor de X2: ", x2, "Valor de Delta: ", delta)
