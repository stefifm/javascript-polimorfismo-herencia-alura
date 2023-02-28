import Cliente from './Cliente.js'

class Cuenta {
  #cliente
  #saldoCuenta

  constructor (cliente, numeroCuenta, agencia, saldoCuenta) {
    if (this.constructor === Cuenta) {
      throw new Error('No se pueden instanciar desde la clase Cuenta')
    }
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

  // Método abstracto
  retirarCuenta (valor) {
    throw new Error('Debe implementar retirarCuenta en su clase')
  }

  // Para retiros de dinero que si es necesario la aplicación de
  // una comisión

  _retirarCuenta (valor, comision) {
    valor = valor * (1 + comision / 100)
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
