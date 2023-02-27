class CuentaAhorro {
  #cliente
  #saldoCuenta

  constructor (cliente, numeroCuenta, agencia, saldoCuenta) {
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

export default CuentaAhorro
