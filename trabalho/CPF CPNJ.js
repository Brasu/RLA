function gerarCPF() {
    let cpf = "";

    for (let i = 0; i < 11; i++) {
        cpf += i;
    }

    return cpf;
}

const nomePessoa = prompt("Nome Completo: ");
const nomePai = prompt("Nome Completo do Pai: ");
const nomeMae = prompt("Nome Completo da Mãe: ");

let documento = "";
let estado = "";

let tipo = prompt("CPF ou CNPJ? ").toLowerCase();

switch (tipo) {

    case "cpf":

        documento = gerarCPF();

        let escolherEstado = prompt("Deseja escolher um estado? (sim/não) ").toLowerCase();

        if (escolherEstado === "sim") {

            while (true) {

                estado = prompt("Digite a sigla do estado:").toUpperCase();

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
console.log("Nome:", nomePessoa);
console.log("Pai:", nomePai);
console.log("Mãe:", nomeMae);

if (tipo === "cpf") {
    console.log("CPF:", documento);
}

if (estado !== "") {
    console.log("Estado:", estado);
}
