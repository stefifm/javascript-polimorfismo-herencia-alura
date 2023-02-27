class Cuenta {
  #cliente
  #saldoCuenta

  constructor (tipo, cliente, numeroCuenta, agencia, saldoCuenta) {
    this.tipo = tipo
    this.numeroCuenta = numeroCuenta
    this.agencia = agencia
    this.#cliente = cliente
    this.#saldoCuenta = saldoCuenta
  }

  depositoCuenta (valor) {
    if (valor > 0) { this.#saldoCuenta += valor }
    return this.#saldoCuenta
  }

  retirarCuenta (valor) {
    if (this.tipo === 'Corriente') {
      valor = valor * 1.05
    } else if (this.tipo === 'Ahorro') {
      valor = valor * 1.02
    }
    if (valor <= this.#saldoCuenta) { this.#saldoCuenta -= valor }
    return this.#saldoCuenta
  }

  mostrarSaldo () {
    return this.#saldoCuenta
  }

  transferirParaCuenta (valor, cuentaDestino) {
    this.retirarCuenta(valor)
    cuentaDestino.depositoCuenta(valor)
  }
}

export default Cuenta
