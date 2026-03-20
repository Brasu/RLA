console.log('Opções Destino: \n1 - Destino A \n2 - Destino B \n3 - Destino C \n4 - Destino D')
const destino = parseInt(prompt('Qual o destino? '))

const quantidadePassageiros = parseInt(prompt('Quantas passagens serão compradas [1-5]? '))

if (quantidadePassageiros < 1 || quantidadePassageiros > 5 || destino < 1 || destino > 4) {

  console.log('Informe a quantidade de passagens entre 1 e 5 e/ou um destino entre 1 e 4.')

} else {

  let nomePassageiros = ''
  let valorPagar = 0, descontoTotal = 0

  let destinoValor, destinoNome
  switch (destino) {
    case 1:
      destinoValor = 45
      destinoNome = 'Destino A'
      break
    case 2:
      destinoValor = 72
      destinoNome = 'Destino B'
      break
    case 3:
      destinoValor = 110
      destinoNome = 'Destino C'
      break
    case 4:
      destinoValor = 138
      destinoNome = 'Destino D'
      break
  }
  const valorTotal = destinoValor * quantidadePassageiros

  if (quantidadePassageiros >= 1) {
    // dados
    console.log('')
    console.log('##### Passageiro 1 #####')
    const nomePassageiro = prompt('Qual o nome do passageiro? ')
    console.log('Categoria do passageiro: \n1 - Adulto \n2 - Estudante \n3 - Idoso \n4 - Criança menor de 5 anos')
    const categoriaPassageiro = parseInt(prompt('Qual a categoria do passageiro? '))

    // descontos
    let desconto = 0, tipoDesconto = 'Desconhecido'
    switch (categoriaPassageiro) {
      case 1:
        desconto = 0
        tipoDesconto = 'Adulto'
        break
      case 2:
        desconto = 50
        tipoDesconto = 'Estudante'
        break
      case 3:
        desconto = 50
        tipoDesconto = 'Idoso'
        break
      case 4:
        desconto = 100
        tipoDesconto = 'Criança'
        break
    }
    nomePassageiros = nomePassageiros + '\n    - ' + nomePassageiro + ' [' + tipoDesconto + ']'

    // contas
    let valorDesconto = valorTotal * (desconto / 100)
    descontoTotal = descontoTotal + valorDesconto
    valorPagar = valorPagar + (valorTotal - valorDesconto)
  }

  if (quantidadePassageiros >= 2) {
    // dados
    console.log('')
    console.log('##### Passageiro 2 #####')
    const nomePassageiro = prompt('Qual o nome do passageiro? ')
    console.log('Categoria do passageiro: \n1 - Adulto \n2 - Estudante \n3 - Idoso \n4 - Criança menor de 5 anos')
    const categoriaPassageiro = parseInt(prompt('Qual a categoria do passageiro? '))

    // descontos
    let desconto = 0, tipoDesconto = 'Desconhecido'
    switch (categoriaPassageiro) {
      case 1:
        desconto = 0
        tipoDesconto = 'Adulto'
        break
      case 2:
        desconto = 50
        tipoDesconto = 'Estudante'
        break
      case 3:
        desconto = 50
        tipoDesconto = 'Idoso'
        break
      case 4:
        desconto = 100
        tipoDesconto = 'Criança'
        break
    }
    nomePassageiros = nomePassageiros + '\n    - ' + nomePassageiro + ' [' + tipoDesconto + ']'

    // contas
    let valorDesconto = valorTotal * (desconto / 100)
    descontoTotal = descontoTotal + valorDesconto
    valorPagar = valorPagar + (valorTotal - valorDesconto)
  }

  if (quantidadePassageiros >= 3) {
    // dados
    console.log('')
    console.log('##### Passageiro 3 #####')
    const nomePassageiro = prompt('Qual o nome do passageiro? ')
    console.log('Categoria do passageiro: \n1 - Adulto \n2 - Estudante \n3 - Idoso \n4 - Criança menor de 5 anos')
    const categoriaPassageiro = parseInt(prompt('Qual a categoria do passageiro? '))

    // descontos
    let desconto = 0, tipoDesconto = 'Desconhecido'
    switch (categoriaPassageiro) {
      case 1:
        desconto = 0
        tipoDesconto = 'Adulto'
        break
      case 2:
        desconto = 50
        tipoDesconto = 'Estudante'
        break
      case 3:
        desconto = 50
        tipoDesconto = 'Idoso'
        break
      case 4:
        desconto = 100
        tipoDesconto = 'Criança'
        break
    }
    nomePassageiros = nomePassageiros + '\n    - ' + nomePassageiro + ' [' + tipoDesconto + ']'

    // contas
    let valorDesconto = valorTotal * (desconto / 100)
    descontoTotal = descontoTotal + valorDesconto
    valorPagar = valorPagar + (valorTotal - valorDesconto)
  }

  if (quantidadePassageiros >= 4) {
    // dados
    console.log('')
    console.log('##### Passageiro 4 #####')
    const nomePassageiro = prompt('Qual o nome do passageiro? ')
    console.log('Categoria do passageiro: \n1 - Adulto \n2 - Estudante \n3 - Idoso \n4 - Criança menor de 5 anos')
    const categoriaPassageiro = parseInt(prompt('Qual a categoria do passageiro? '))

    // descontos
    let desconto = 0, tipoDesconto = 'Desconhecido'
    switch (categoriaPassageiro) {
      case 1:
        desconto = 0
        tipoDesconto = 'Adulto'
        break
      case 2:
        desconto = 50
        tipoDesconto = 'Estudante'
        break
      case 3:
        desconto = 50
        tipoDesconto = 'Idoso'
        break
      case 4:
        desconto = 100
        tipoDesconto = 'Criança'
        break
    }
    nomePassageiros = nomePassageiros + '\n    - ' + nomePassageiro + ' [' + tipoDesconto + ']'

    // contas
    let valorDesconto = valorTotal * (desconto / 100)
    descontoTotal = descontoTotal + valorDesconto
    valorPagar = valorPagar + (valorTotal - valorDesconto)
  }

  if (quantidadePassageiros >= 5) {
    // dados
    console.log('')
    console.log('##### Passageiro 5 #####')
    const nomePassageiro = prompt('Qual o nome do passageiro? ')
    console.log('Categoria do passageiro: \n1 - Adulto \n2 - Estudante \n3 - Idoso \n4 - Criança menor de 5 anos')
    const categoriaPassageiro = parseInt(prompt('Qual a categoria do passageiro? '))

    // descontos
    let desconto = 0, tipoDesconto = 'Desconhecido'
    switch (categoriaPassageiro) {
      case 1:
        desconto = 0
        tipoDesconto = 'Adulto'
        break
      case 2:
        desconto = 50
        tipoDesconto = 'Estudante'
        break
      case 3:
        desconto = 50
        tipoDesconto = 'Idoso'
        break
      case 4:
        desconto = 100
        tipoDesconto = 'Criança'
        break
    }
    nomePassageiros = nomePassageiros + '\n    - ' + nomePassageiro + ' [' + tipoDesconto + ']'

    // contas
    let valorDesconto = valorTotal * (desconto / 100)
    descontoTotal = descontoTotal + valorDesconto
    valorPagar = valorPagar + (valorTotal - valorDesconto)
  }

  let mensagemEmbarque = 'Embarque desconhecido'
  switch (true) {
    case valorPagar === 0:
      mensagemEmbarque = 'Embarque gratuito liberado.'
      break
    case valorPagar < 100:
      mensagemEmbarque = 'Dirija-se ao guichê para pagamento.'
      break
    case valorPagar < 200:
      mensagemEmbarque = 'Pagamento via terminal disponível.'
      break
    case valorPagar >= 200:
      mensagemEmbarque = 'Atendimento prioritário no guichê VIP.'
      break
  }

  console.log('')
  console.log('----- COMPROVANTE -----')
  console.log(
    '',
    'Destino:', destinoNome, '\n',
    'Quantidade de passagens:', quantidadePassageiros, '\n',
    'Passageiro(s)', nomePassageiros, '\n',
    'Valor total:  R$', valorTotal, '\n',
    'Desconto: R$', descontoTotal, '\n',
    'Valor a pagar: R$', valorPagar, '\n\n',
    'Instruções:', mensagemEmbarque, '\n',
  )
}
