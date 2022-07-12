class Estudiante {
  _nombre = "JuanMa"
  _asignaturas = ["HTML", "CSS","Javascript"]

  obtenDatos() {
      return {
          nombre: this._nombre,
          asignaturas: this._asignaturas
      }
  }
}

const estudiante = new Estudiante()

console.log(estudiante.obtenDatos())