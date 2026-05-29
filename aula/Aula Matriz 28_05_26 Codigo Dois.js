// Soma de Matrizes

let soma = 0;

let matriz = [[1, 2, 3, 4, 5],
              [6, 7, 8, 9, 10],
              [11, 12, 13, 14, 15],
              [16, 17, 18, 19, 20],
              [21, 22, 23, 24, 25]];

for(let coluna = 0; coluna < matriz.length; coluna++){
 
  for(let linha = 0; linha < matriz.length; linha++){
    soma += matriz[coluna][linha]
                }
}
console.log(soma)
