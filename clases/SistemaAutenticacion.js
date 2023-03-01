class SistemaAutenticacion {
  // Método estático
  static login (usuario, clave) {
    // Validando si autenticable está en el objeto usuario
    // y si es una instancia de una función
    if ('autenticable' in usuario && usuario.autenticable instanceof Function) {
      return usuario.autenticable(clave)
    } else {
      return false
    }
  }
}

export default SistemaAutenticacion
