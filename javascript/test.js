let listaPromedios = [
  {
    id: 1,
    nombreAlumno: "Cristian",
    notas: [10, 7, 6, 8],
    promedio: 7.8,
    estado: "aprobado",
  },
  {
    id: 2,
    nombreAlumno: "Daniel",
    notas: [4, 3, 5, 8],
    promedio: 7.8,
    estado: "reprobado",
  },
]

console.log(listaPromedios)

listaPromedios.push({
  id: 3,
  nombreAlumno: "Fernando",
  notas: [10, 7, 6, 8],
  promedio: 7.8,
  estado: "aprobado",
})

console.log(listaPromedios)

const lista = listaPromedios.map((e) => e.nombreAlumno)

console.log(lista)

class ListaNotas {
  constructor(nombre, notas, promedio) {
    this.nombre, this.notas, this.promedio
  }
}
