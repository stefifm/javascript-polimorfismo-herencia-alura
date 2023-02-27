import Cliente from './Cliente.js'

class Cuenta {
  #cliente
  #saldoCuenta

  constructor (cliente, numeroCuenta, agencia, saldoCuenta) {
    this.numeroCuenta = numeroCuenta
    this.agencia = agencia
    this.#cliente = cliente
    this.#saldoCuenta = saldoCuenta
  }

  set setCliente (valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor
    }
  }

  get getCliente () {
    return this.#cliente
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

  prueba () {
    console.log('Método padre')
  }
}

export default Cuenta
