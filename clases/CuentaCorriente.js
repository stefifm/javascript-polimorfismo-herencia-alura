import Cuenta from './Cuenta.js'

class CuentaCorriente extends Cuenta {
  static cantidadCuentas = 0

  constructor (cliente, numeroCuenta, agencia) {
    super(cliente, numeroCuenta, agencia, 0)
    CuentaCorriente.cantidadCuentas++
  }

  prueba () {
    super.prueba()
    console.log('Método del hijo')
  }
}

export default CuentaCorriente
