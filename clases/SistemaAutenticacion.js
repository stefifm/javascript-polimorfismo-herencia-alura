class SistemaAutenticacion {
  static login (usuario, clave) {
    return usuario.autenticable(clave)
  }
}

export default SistemaAutenticacion
