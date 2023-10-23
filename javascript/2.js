// function logger(value, context) {
//   console.log("Decorated called!")
// }

// @logger
// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre
//     this.edad = edad
//   }
// }

// const persona = new Persona("Cristian", 24)

class Usuario {
  constructor(username, password) {
    this.username = username
    this.password = password
  }
}

class Admin extends Usuario {
  constructor(username, password, permisos) {
    super(username, password)
    this.permisos = []
  }

  addPermisos(permisos) {
    this.permisos.push(permisos)
  }
}

const admin = new Admin("c_donnachie", "123")

admin.addPermisos("asdasd")

console.log(admin)
