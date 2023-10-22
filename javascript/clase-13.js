// Operador ternario

// const usuario = {
//   nombre: "Cristian",
//   edad: 24,
// }
// Declaramos y asignamos la condicion
// const permiso = usuario.edad >= 18 ? true : false

// // Mostramos el mensaje
// permiso ? alert("Puede comprar cerverza") : alert("No puede comprar")

// // Operadores Logicos

// const carrito = []

// if (carrito.length === 0) {
//   console.log("Carrito vacio!")
// }

// // Con operador AND (solo cuando es verdadero, si la condicion resulta falsa, returno FALSE)

// carrito.length === 0 && console.log("Carrito vacio!")

// // Ejemplo

// const registroIngreso = usuario.edad <= 18 && new Date()

// console.log(registroIngreso) // FALSE

// =================================================================

// Operador logico OR

// const usuario2 = ""

// console.log(usuario) || "El usuario no existe"
// // { nombre: 'Cristian', edad: 24 }

// console.log(usuario2) || console.log("El usuario no existe")

// // Ejemplo OR

// const carrito = JSON.parse(localStorage.getItem("carrito")) || []

// =================================================================

// // Acceso condicional a un Objeto con ?

// const usuario = {
//   nombre: "John Doe",
//   edad: 22,
//   cursos: {
//     javascript: "aprobado",
//   },
// }
// console.log(usuario?.cursos?.javascript || "la propiedad no existe")
// // "aprobado"
// console.log(usuario?.trabajos?.coderhouse || "La propiedad no existe")
// // La propiedad no existe

// =================================================================

// Desectructuracion

// Forma no buena
// const usuario = {
//   nombre: "Cristian",
//   edad: 24,
//   telefonos: {
//     trabajo: 12312412,
//     personal: 641232,
//   },
// }

// let nombre = usuario.nombre
// let edad = usuario.edad

// Buena Practica:
// Acceder a las propiedades mediante desectructuracion

// const {
//   nombre,
//   edad,
//   telefonos: { trabajo, personal },
// } = usuario

// console.log(nombre)
// console.log(edad)
// console.log(personal)

// Desectructuracion con ALIAS:

const item = {
  item_id: 123,
  product_name: "cargador",
  price_per_unit: 8990,
}

const { item_id: id, product_name: nombre, price_per_unit: price } = item

console.log(nombre)

// Desectructuracion en parametros:

// const producto = {
//   id: 10,
//   nombre: "Curso javascript",
//   precio: 10990,
// }

// const desectructurar = (item) => {
//   const { id, nombre } = item
//   console.log(id, nombre)
// }

// desectructurar(producto)

// =================================================================

// Desectructuracion de Arrays

const nombres = ["cristian", "Daniel", "John"]

const [, a, b] = nombres

console.log(a, b)

// =================================================================

// PARÁMETROS nombrados en las funciones

// function createGodzilla({ color, material = "metal", weight = 200, sound, powers }) {}

// // Contrato, Parametros Nombrados
// const godzillaParams  = {
//   color: blue,
//   material: plastic,
//   sound: "GROARR",
//   powers: ["lightning", "nuclear bomb"],
// }

// createGodzilla(godzillaParams)

// =================================================================

const emojis = ["🤩", "🚀", "😍"]

// const tieneCorazon = emojis.some((emoji) => {
//   emoji === "😍"
//   tieneCorazon ? console.log("Si tiene corazon") : console.log("No tiene corazon")
// })

function Buscar(elemento) {
  const siTiene = emojis.some((emoji) => emoji === elemento)
  siTiene ? console.log("Si tiene corazon") : console.log("No tiene corazon")
}

Buscar("😍")

class Producto {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre
    this.descripcion = descripcion
    this.precio = precio
  }
}

const productParams = {
  nombre: "Cable Usb",
  descripcion: "asdasd",
  precio: 9990,
}

const { nombre: nombreProducto, descripcion, precio } = productParams // Cambiamos el nombre a nombreProducto

const nuevoProducto = new Producto(nombreProducto, descripcion, precio)
console.log(nuevoProducto)
