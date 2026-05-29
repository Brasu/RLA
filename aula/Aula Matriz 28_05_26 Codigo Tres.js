// Identificar se existe número X na Matriz

let matriz = [[1, 2, 3, 4, 5],
              [6, 7, 8, 9, 10],
              [11, 12, 13, 14, 15],
              [16, 17, 18, 19, 20],
              [21, 22, 23, 24, 25]];
while(true){
  let número = parseInt(prompt("Digite um número: "));
  if(matriz == (número - 1)){
    console.log("Número existe na matriz!")
  }
}
