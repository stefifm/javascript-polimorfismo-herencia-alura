import Cuenta from './Cuenta.js'

class CuentaNomina extends Cuenta {
  constructor (cliente, numeroCuenta, agencia, saldoCuenta) {
    super(cliente, numeroCuenta, agencia, saldoCuenta)
  }

  // Método heredado
  retirarCuenta (valor) {
    super._retirarCuenta(valor, 1)
  }
}

export default CuentaNomina
