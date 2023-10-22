// const persona = {
//     nombre: 'Candela',
//     apellido: 'Yarossi',
//     dni: 92925833,
// }

// console.log(persona.nombre)

// function Persona(nombre, apellido, dni) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.dni = dni;
//     this.nombreCompleto = function(separador) {
//         return apellido + separador + ' ' + nombre
//     }
//     this.apellidoMayus = () => apellido.toUpperCase()
// }

// let persona = new Persona('Candela', 'Yarossi', 34030034)

// console.log(persona.apellidoMayus())

// class Persona{
//     constructor(nombre, apellido, dni) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.dni = dni;
//     }
//     nombreCompleto(separador) {
//         return this.apellido + separador + '' + this.nombre
//     }
// }

// let persona = new Persona('Candela', 'Yarossi', 1431234)

// console.log(persona.nombreCompleto(','))

// ================================================================

// class User {
//   constructor(email, password) {
//     this.email = email
//     this.password = password
//   }
//   comprobarUsuario(email, password) {
//     if (email === this.email) {
//       if (password === this.password) {
//         return "Acceso exitoso!"
//       } else {
//         return "Contraseña incorrecta"
//       }
//     } else {
//       return "Email incorrecto"
//     }
//   }
// }

// let usuario1 = new User("ejemplo@gmail.com", "1234")

// let respuesta = ""

// do {
//   let email = prompt("Ingrese su email:")
//   let password = prompt("Ingrese su contraseña:")
//   respuesta = usuario1.comprobarUsuario(email, password)
//   alert(respuesta)
// } while (respuesta !== "Acceso exitoso!")

// class Auto{
//     constructor(color) {
//         this.color = color
//     }

//     queColorEs() {
//         return "este auto es de color " + this.color.toLowerCase()
//     }
// }

// const auto1 = new Auto('rojo')

// console.log(auto1.queColorEs())

// ================================================================

// // Clase padre
// class Forma {
//     constructor() {
//       console.log("Soy una forma geométrica.");
//     }
//   }

//   // Clase hija
//   class Cuadrado extends Forma {
//     constructor() {
//       super();
//       console.log("Soy un cuadrado.");
//     }
//   }

//   const c1 = new Cuadrado();
// // Soy una forma geométrica.
// // Soy un cuadrado.

class Usuario {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }

  saludo() {
    console.log(`Hola soy ${this.name}`)
  }

  login(email, password) {
    return email === this.email && password === this.email
  }
}

class Alumno extends Usuario {
  constructor(name, email, password) {
    super(name, email, password)
    this.cursos = []
    this.activo = false
  }

  agregarCurso(curso) {
    this.curso.push(curso)
  }

  login() {
    if (!this.activo) return false

    return super.login(email, password)
  }
}

// const pablo = new Usuario("Pablo", "pablo@gmail.com", "pablo1234")
const jose = new Alumno("Jose", "Jose@gmail.com", "jose1234")

console.log(jose)
