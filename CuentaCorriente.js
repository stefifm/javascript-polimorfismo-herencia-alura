import Cliente from './Cliente.js'

class CuentaCorriente {
  #cliente
  numeroCuenta
  agencia
  #saldoCuenta
  static cantidadCuentas = 0

  set setCliente (valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor
    }
  }

  get getCliente () {
    return this.#cliente
  }

  constructor (cliente, numeroCuenta, agencia) {
    this.setCliente = cliente
    this.numeroCuenta = numeroCuenta
    this.agencia = agencia
    this.#saldoCuenta = 0
    CuentaCorriente.cantidadCuentas++
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

export default CuentaCorriente
