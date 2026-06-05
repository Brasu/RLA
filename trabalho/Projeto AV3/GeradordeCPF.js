function gerarCPF(estado, formatacao) {
    let digitos = [];

    for (let i = 0; i < 9; i++) {
        digitos[i] = Math.floor(Math.random() * 10);
    }

    if (estado !== "") {
        digitos[8] = estado;
    }

    let soma1 = 0;
    for (let i = 0; i < 9; i++) {
        soma1 += digitos[i] * (10 - i);
    }

    let resto1 = soma1 % 11;
    let v1 = resto1 < 2 ? 0 : 11 - resto1;

    let soma2 = 0;
    for (let i = 0; i < 9; i++) {
        soma2 += digitos[i] * (11 - i);
    }

    soma2 += v1 * 2;

    let resto2 = soma2 % 11;
    let v2 = resto2 < 2 ? 0 : 11 - resto2;

    if (formatacao === "sim") {
        return digitos[0] + "" + digitos[1] + "" + digitos[2] + "." +
            digitos[3] + "" + digitos[4] + "" + digitos[5] + "." +
            digitos[6] + "" + digitos[7] + "" + digitos[8] + "-" +
            v1 + "" + v2;
    }
    return digitos[0] + "" + digitos[1] + "" + digitos[2] + "" +
        digitos[3] + "" + digitos[4] + "" + digitos[5] + "" +
        digitos[6] + "" + digitos[7] + "" + digitos[8] + "" +
        v1 + "" + v2;
}

function gerarRG(estado) {
    switch (estado) {
        case "0":
            let digitoZero = [];
            let RGZero;

            for (let numero = 0; numero < 10; numero++) {
                digitoZero[numero] = (Math.floor(Math.random() * 10));
            }

            RGZero = digitoZero[0] + "" + digitoZero[1] + "" + digitoZero[2] + "" +
                digitoZero[3] + "" + digitoZero[4] + "" + digitoZero[5] + "" +
                digitoZero[6] + "" + digitoZero[7] + "" + digitoZero[8] + "" + digitoZero[9];
            return RGZero
            break;

        case "1":

            break;

        case "2":

            break;

        case "3":

            break;

        case "4":

            break;

        case "5":

            break;

        case "6":
            let digitoSeis = [];
            let RGSeis;

            for (let numero = 2; numero < 10; numero++) {
                digitoSeis[numero] = (Math.floor(Math.random() * 10));
            }

            digitoSeis[0] = "M";
            digitoSeis[1] = "G";
            RGSeis = digitoSeis[0] + digitoSeis[1] + "-" + digitoSeis[2] + "" +
                digitoSeis[3] + "." + digitoSeis[4] + "" + digitoSeis[5] + "" +
                digitoSeis[6] + "." + digitoSeis[7] + "" + digitoSeis[8] + "" + digitoSeis[9];

            return RGSeis
            break;
        case "7":

            break;

        case "8":
            let digito = [];
            let multiplicacao = [];
            let soma = 0;
            let RG;

            for (let numero = 0; numero < 9; numero++) {
                digito[numero] = (Math.floor(Math.random() * 10));
            }
            for (let indice = 2; indice < 10; indice++) {
                multiplicacao[indice] = digito[indice] * (indice);
            }
            for (let indice = 0; indice < 10; indice++) {
                soma += multiplicacao[indice];
            }
            resto = soma % 11
            digito.push(resto);
            RG = digito[0] + "" + digito[1] + "." + digito[2] + "" +
                digito[3] + "" + digito[4] + "." + digito[5] + "." +
                digito[6] + "" + digito[7] + "-" + digito[8];
            return RG
            break;

        case "9":

            break;

        default:
            let digito1 = [];
            let multiplicacao1 = [];
            let soma1 = 0;
            let RG1;

            for (let numero = 0; numero < 9; numero++) {
                digito1[numero] = (Math.floor(Math.random() * 10));
            }
            for (let indice = 2; indice < 10; indice++) {
                multiplicacao1[indice] = digito1[indice] * (indice);
            }
            for (let indice = 0; indice < 10; indice++) {
                soma1 += multiplicacao1[indice];
            }
            resto = soma1 % 11
            digito1.push(resto);
            RG1 = digito1[0] + "" + digito1[1] + "." + digito1[2] + "" +
                digito1[3] + "" + digito1[4] + "." + digito1[5] + "." +
                digito1[6] + "" + digito1[7] + "-" + digito1[8];
            return RG1
            break;

    }
}

function atualizarNaTelaCPF(cpf, nome, filiacao, rg) {
    const divCPF = document.getElementById('SAIDA_CPF');
    divCPF.innerHTML = cpf;
    const divRG = document.getElementById('SAIDA_RG');
    divRG.innerHTML = rg;
    const divFiliacao = document.getElementById('SAIDA_FILIACAO');
    divFiliacao.innerHTML = filiacao;
    const divNome = document.getElementById('SAIDA_NOME');
    divNome.innerHTML = nome;
}

const formulario = document.forms.formulario_cpf;

if (formulario) {
    formulario.gerar.addEventListener('click', function (abacaxi) {
        // console.log({ event: abacaxi });
        abacaxi.preventDefault();
        const nonoDigito = formulario.estados.value;
        const formatacao = formulario.decisao.value;

        const cpf = gerarCPF(nonoDigito, formatacao);
        const nome = formulario.nome.value;
        const filiciao = formulario.pai.value + "<br>" + formulario.mae.value;
        const rg = gerarRG(nonoDigito);

        atualizarNaTelaCPF(cpf, nome, filiciao, rg);
    })
} else console.warn("Formulário CPF não encontrado");
