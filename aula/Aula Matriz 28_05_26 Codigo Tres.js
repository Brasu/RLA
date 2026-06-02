// Identificar se existe número X na Matriz

let matriz = [[1, 2, 3, 4, 5],
              [6, 7, 8, 9, 10],
              [11, 12, 13, 14, 15],
              [16, 17, 18, 19, 20],
              [21, 22, 23, 24, 25]];

const matriz = [
    [1, 2],
    [3, 5],
];

const search = Number(prompt("Informe um número: "))
let found
let candidate

for (let coluna = 0; coluna < matriz.length; coluna++) {
    for (let linha = 0; linha < matriz.length; linha++) {
        candidate = matriz[coluna][linha]
        if (candidate === search) {
            found = {
                coluna,
                linha,
            }
        }
    }
}

console.log(found)

if (found) {
    console.log("O seu número foi localizado na coluna", found.coluna, "e linha", found.linha)
    return
}
console.log("Seu número não foi encontrado")
