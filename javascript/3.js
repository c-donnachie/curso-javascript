// function mayorQue(n) {
//   return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)

// console.log(mayorQueDiez(12)) // True
// console.log(mayorQueDiez(10)) // False

// function creaContador() {
//   let contador = 0
//   return function () {
//     contador++
//     console.log(contador)
//   }
// }

// const incrementar = creaContador()
// incrementar() // 1
// incrementar() // 2

// function creaManejador(valor) {
//   return function () {
//     console.log("Evento manejado con valor: " + valor)
//   }
// }

// const boton = document.querySelector("#miBoton")
// boton.addEventListener("click", creaManejador("Ejemplo"))

function creaSaludo(saludo) {
  return function (nombre) {
    console.log(saludo + " " + nombre)
  }
}

const saludarHola = creaSaludo("Hola")
saludarHola("Juan") // Hola Juan

const nuevoSaludo = creaSaludo("Holaaa")
nuevoSaludo("Cristian")

const saludarAdios = creaSaludo("Adiós")
saludarAdios("María") // Adiós María

function test(a) {
  return (b) => {
    const res = a + b
    console.log("Total Suma: " + res)
  }
}

const primeraSuma = test(10) // 10 + b
primeraSuma(40) // 10 + 40
