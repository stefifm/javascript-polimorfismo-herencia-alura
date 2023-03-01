class Empleado {
  #nombre
  #dni
  #salario
  #clave

  constructor (nombre, dni, salario) {
    if (this.constructor === Empleado) {
      throw new Error('No se debe instanciar desde la clase Empleado')
    }
    this.#nombre = nombre
    this.#dni = dni
    this.#salario = salario
    this.#clave = ''
  }

  mostrarBonificacion () {
    throw new Error('Este método debe usarse en las clases hijas')
  }

  _mostrarBonificacion (bono) {
    return this.#salario + (this.#salario * bono / 100)
  }

  asignarClave (clave) {
    this.#clave = clave
  }

  autenticable (clave) {
    return clave === this.#clave
  }
}

export default Empleado
