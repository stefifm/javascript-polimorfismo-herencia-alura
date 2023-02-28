import Cuenta from './Cuenta.js'

class CuentaAhorro extends Cuenta {
  constructor (cliente, numeroCuenta, agencia, saldoCuenta) {
    super(cliente, numeroCuenta, agencia, saldoCuenta)
  }

  retirarCuenta (valor) {
    super._retirarCuenta(valor, 2)
  }
}

export default CuentaAhorro
