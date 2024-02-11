let saldo = 0

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas
}

function iniciarPartida() {
    let txtFinal = document.querySelector('#txtFinal')
    let probabilidade

    probabilidade = Math.random()
    probabilidade *= 13
    probabilidade = Math.floor(probabilidade)
    probabilidade -= 5     // Ajustando a probabilidade para estar entre -5 e 10

    if (saldo + probabilidade > 150) { // Limitando o saldo máximo a 150
        probabilidade = 150 - saldo
    }
    saldo += probabilidade
    let nivel
    if (saldo <= 10) {
        nivel = 'Ferro'
    } else if (saldo <= 20) {
        nivel = 'Bronze'
    } else if (saldo <= 50) {
        nivel = 'Prata'
    } else if (saldo <= 80) {
        nivel = 'Ouro'
    } else if (saldo <= 90) {
        nivel = 'Diamante'
    } else if (saldo <= 100) {
        nivel = 'Lendário'
    } else {
        nivel = 'Imortal'
    }

    txtFinal.innerHTML = `O Herói tem o saldo de **${saldo}** e está no nível de **${nivel}**`
}
