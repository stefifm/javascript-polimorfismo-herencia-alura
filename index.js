import CuentaCorriente from './CuentaCorriente.js'
import Cliente from './Cliente.js'

/* CREANDO OBJETO CLIENTE */

const cliente = new Cliente('Leonardo', '123456789', '1001')
const cliente2 = new Cliente('Maria', '30539530', '1002')

/* CREANDO OBJETO CUENTA CORRIENTE */
const cuentaLeondardo = new CuentaCorriente(cliente, '1', '001')
const cuentaMaria = new CuentaCorriente(cliente2, '2', '002')

/* OPERACIÓN DE MOSTRAR SALDO, DEPOSITO Y RETIRO DE DINERO DE CUENTA */
let saldo = cuentaLeondardo.mostrarSaldo()

saldo = cuentaLeondardo.depositoCuenta(5000)
console.log(`El saldo actual de (cuentaLeonardo) $ ${saldo}`)
saldo = cuentaLeondardo.retirarCuenta(200)
console.log(`El saldo actual de (cuentaLeonardo) $ ${saldo}`)

/* MOSTRANDO CLIENTE */

console.log('\n MOSTRAR CLIENTE\n')
console.log(cuentaMaria.getCliente)
console.log(cuentaLeondardo.getCliente)

/* CONTANDO CUENTAS */

console.log('\n CONTANDO CUENTAS\n')
console.log(CuentaCorriente.cantidadCuentas)

/* TRANSFERENCIA */

console.log('\nTRANSFERENCIAS\n')

cuentaLeondardo.transferirParaCuenta(100, cuentaMaria)
const saldoMaria = cuentaMaria.mostrarSaldo()
console.log(`\nEl saldo actual de (cuentaMaria) es $ ${saldoMaria}`)
const saldoLeonardo = cuentaLeondardo.mostrarSaldo()
console.log(`\nEl saldo actual de (cuentaLeonardo) es $ ${saldoLeonardo}`)
