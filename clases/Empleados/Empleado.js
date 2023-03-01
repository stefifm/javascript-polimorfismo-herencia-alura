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

  // Método abstracto
  mostrarBonificacion () {
    throw new Error('Este método debe usarse en las clases hijas')
  }

  // Método privado
  _mostrarBonificacion (bono) {
    return this.#salario + (this.#salario * bono / 100)
  }

  asignarClave (clave) {
    this.#clave = clave
  }

  // Aplicando polimorfismo e interfaz
  autenticable (clave) {
    return clave === this.#clave
  }
}

export default Empleado
