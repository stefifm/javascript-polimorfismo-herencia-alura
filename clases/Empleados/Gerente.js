import Empleado from './Empleado.js'

class Gerente extends Empleado {
  constructor (nombre, dni, salario) {
    super(nombre, dni, salario)
  }

  // Método heredado y sobreescrito
  mostrarBonificacion () {
    const bono = 5
    return super._mostrarBonificacion(bono)
  }
}

export default Gerente
