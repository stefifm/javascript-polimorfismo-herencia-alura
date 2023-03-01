import CuentaCorriente from './clases/Cuentas/CuentaCorriente.js'
import CuentaAhorro from './clases/Cuentas/CuentaAhorro.js'
import Cliente from './clases/Cliente.js'
import CuentaNomina from './clases/Cuentas/CuentaNomina.js'
import Director from './clases/Empleados/Director.js'
import Gerente from './clases/Empleados/Gerente.js'
import SistemaAutenticacion from './clases/SistemaAutenticacion.js'

/* CREANDO OBJETO CLIENTE */

const cliente = new Cliente('Leonardo', '123456789', '1001')
cliente.asignarClave('456789')
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

/* GESTION DE EMPLEADOS */

console.log('\n GESTION DE EMPLEADOS \n')

const director = new Director('Jose Pérez', '30250998', 15000)
director.asignarClave('123456')
const gerente = new Gerente('Marcela', '16530989', 12000)
gerente.asignarClave('655')

console.log(director.mostrarBonificacion())
console.log(gerente.mostrarBonificacion())

/* SISTEMA DE AUTENTIACIÓN */
console.log('\n AUTENTICANDO CLAVES DE EMPLEADOS \n')
console.log(SistemaAutenticacion.login(director, '123456'))
console.log(SistemaAutenticacion.login(gerente, '6556'))
console.log(SistemaAutenticacion.login(cliente, '456789'))
console.log('\n')
