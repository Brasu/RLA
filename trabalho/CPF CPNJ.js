function gerarCPF() {
    
    let digitos = [];
    for (let i = 0; i < 9; i++){
        digitos[i] = Math.floor(Math.random() * 10);
    }
    let soma1 = 0;
    for (let i = 0; i < 9; i++){
        soma1 += digitos[i] * (10-i);
    }
    let resto1 = soma1 % 11;
    let v1 = resto1 < 2 ? 0 : 11 - resto1;
    
    let soma2 = 0;
    for (let i = 0; i < 9; i++){
        soma2 += digitos[i] * (11-i);
    }
    soma2+= v1 * 2;
    let resto2 = soma2 % 11;
    let v2 = resto2 < 2 ? 0 : 11 - resto2;
    
    let cpf = digitos[0] + "" + digitos[1] + "" + digitos[2] + "." + 
    digitos[3] + "" + digitos[4] + "" + digitos[5] + "." + 
    digitos[6] + "" + digitos[7] + "" + digitos[8] + "-" + v1 + "" + v2;
    
    return cpf;
}

const nomePessoa = prompt("Digite seu nome completo: ");
const nomePai = prompt("Digite o nome completo do pai: ");
const nomeMae = prompt("Digite o nome completo da mãe: ");

let documento = "";
let estado = "";

let tipo = prompt("Gostaria de criar um CPF ou CNPJ? ").toLowerCase();

switch (tipo) {
    case "cpf":
        documento = gerarCPF();
        let escolherEstado = prompt("Deseja escolher um estado? (sim/não): ").toLowerCase();
        if (escolherEstado === "sim") {
            while (true) {
                estado = prompt("Digite a sigla do estado: ").toUpperCase();
                if (
                    estado === "AC" || estado === "AL" || estado === "AP" ||
                    estado === "AM" || estado === "BA" || estado === "CE" ||
                    estado === "DF" || estado === "ES" || estado === "GO" ||
                    estado === "MA" || estado === "MT" || estado === "MS" ||
                    estado === "MG" || estado === "PA" || estado === "PB" ||
                    estado === "PR" || estado === "PE" || estado === "PI" ||
                    estado === "RJ" || estado === "RN" || estado === "RS" ||
                    estado === "RO" || estado === "RR" || estado === "SC" ||
                    estado === "SP" || estado === "SE" || estado === "TO"
                ) {
                    break;
                }
                alert("Estado inválido!");
            }
        }
        break;
    case "cnpj":
        alert("Gerador de CNPJ ainda não foi implementado.");
        break;
    default:
        alert("Opção inválida.");
}

console.log("=== REGISTRO GERAL ===");
console.log("Nome: ", nomePessoa);
console.log("Pai: ", nomePai);
console.log("Mãe: ", nomeMae);

if (tipo === "cpf") {
    console.log("CPF: ", documento);
}

if (estado !== "") {
    console.log("Estado: ", estado);
}