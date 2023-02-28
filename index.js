import CuentaCorriente from './clases/CuentaCorriente.js'
import CuentaAhorro from './clases/CuentaAhorro.js'
import Cliente from './clases/Cliente.js'
import CuentaNomina from './clases/CuentaNomina.js'

/* CREANDO OBJETO CLIENTE */

const cliente = new Cliente('Leonardo', '123456789', '1001')
// const cliente2 = new Cliente('Maria', '30539530', '1002')

/* CREANDO OBJETO CUENTA CORRIENTE */
const cuentaLeondardo = new CuentaCorriente(cliente, '1', '001')
// const cuentaMaria = new CuentaCorriente(cliente2, '2', '002')

/* CREANDO OBJETO CUENTA AHORRO */
const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '001', 0)

const cuentaNominaLeonardo = new CuentaNomina(cliente, '9854', '001', 100)

/* MOSTRANDO CUENTAS */
console.log(cuentaLeondardo)
console.log(cuentaAhorroLeonardo)
console.log(cuentaNominaLeonardo)

/* OPERACIONES CON MÉTODOS ABSTRACTOS */

cuentaNominaLeonardo.depositoCuenta(150)
console.log(cuentaNominaLeonardo.mostrarSaldo())
cuentaNominaLeonardo.retirarCuenta(50)
console.log(cuentaNominaLeonardo.mostrarSaldo())
