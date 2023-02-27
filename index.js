// import CuentaCorriente from './clases/CuentaCorriente.js'
// import CuentaAhorro from './clases/CuentaAhorro.js'
import Cliente from './clases/Cliente.js'
import Cuenta from './clases/Cuenta.js'

/* CREANDO OBJETO CLIENTE */

const cliente = new Cliente('Leonardo', '123456789', '1001')
// const cliente2 = new Cliente('Maria', '30539530', '1002')

/* CREANDO OBJETO CUENTA CORRIENTE */
const cuentaLeondardo = new Cuenta('Corriente', cliente, '1', '001', 0)
// const cuentaMaria = new Cuenta('Corriente', cliente2, '2', '002', 0)

/* CREANDO OBJETO CUENTA AHORRO */
const cuentaAhorroLeonardo = new Cuenta('Ahorro', cliente, '9985', '001', 0)

/* MOSTRANDO LAS CUENTAS Y OPERACIONES */
console.log(cuentaLeondardo)

cuentaLeondardo.depositoCuenta(150)
console.log(cuentaLeondardo.mostrarSaldo())
cuentaLeondardo.retirarCuenta(70)
console.log(cuentaLeondardo.mostrarSaldo())

console.log(cuentaAhorroLeonardo)
cuentaAhorroLeonardo.depositoCuenta(200)
console.log(cuentaAhorroLeonardo.mostrarSaldo())
cuentaAhorroLeonardo.retirarCuenta(120)
console.log(cuentaAhorroLeonardo.mostrarSaldo())