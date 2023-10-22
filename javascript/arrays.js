// const frutas = ['platano', 'manzana', 'pera', 'mandarina']

// console.log(frutas[0])

// // const Juan = nombres.some(nombre => nombre === 'Juan')

// const eliminar = (nombre) => {

//     let index = frutas.indexOf(nombre)

//     if (index !== -1) {
//         frutas.splice(index, 1)
//     }

// }

// eliminar('platano')

// console.log(frutas)

// ================================================================

// ARRAY + OBJETOS

// const objeto1 = { id: 1, producto: 'Arroz' }
// const array = [objeto1, { id: 2, producto: "Tallarines" }]

// array.push({ id: 3, producto: 'Pan' })

// console.log(array)

// ========================================================

// FOR.. OF

// const productos = [
//   { id: 1, producto: "Arroz" },
//   { id: 2, producto: "Tallarines" },
//   { id: 3, produto: "Pan" },
// ]

// for (const producto of productos) {
//     console.log(producto.id)
//     console.log(producto.producto)
// }

// ================================================

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

  comprobarUsuario(email, password) {
    if (email === this.email && password === this.password) {
      return this.name
    } else {
      return false
    }
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
