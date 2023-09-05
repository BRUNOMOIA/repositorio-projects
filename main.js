let valorConta = 0
let gorjetaGarçom = 0
let valorTotal = 0

valorConta = parseFloat (prompt('digite o valor da conta: '))
gorjetaGarçom = parseFloat (prompt('digite a gorjeta (decimal)%: '))

//gorjetaGarçom = (valorConta * gorjetaGarçom) / 100
//valorTotal = valorConta + gorjetaGarçom

valorTotal = valorTotal + valorConta
valorTotal = valorTotal + (valorConta * gorjetaGarçom) / 100

alert ('o valor total com gorjeta é de R$' + valorTotal)



