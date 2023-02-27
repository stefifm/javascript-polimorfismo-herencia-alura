import Cuenta from './Cuenta.js'

class CuentaAhorro extends Cuenta {
  constructor (cliente, numeroCuenta, agencia, saldoCuenta) {
    super(cliente, numeroCuenta, agencia, saldoCuenta)
  }
}

export default CuentaAhorro
