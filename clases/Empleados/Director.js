import Empleado from './Empleado.js'

class Director extends Empleado {
  constructor (nombre, dni, salario) {
    super(nombre, dni, salario)
  }

  // Método heredado y sobreescrito
  mostrarBonificacion () {
    const bono = 10
    return super._mostrarBonificacion(bono)
  }
}

export default Director
