import Cuenta from './Cuenta.js'

class CuentaCorriente extends Cuenta {
  static cantidadCuentas = 0

  constructor (cliente, numeroCuenta, agencia) {
    super(cliente, numeroCuenta, agencia, 0)
    CuentaCorriente.cantidadCuentas++
  }

  retirarCuenta (valor) {
    super._retirarCuenta(valor, 5)
  }
}

export default CuentaCorriente
