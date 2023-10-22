// // MATH

// // Propiedades de Math

// console.log(Math.E);
// console.log(Math.PI);

// // Métodos Min y Max

// console.log(Math.max(55, 13, 0, -25, 93, 4));
// console.log(Math.min(55, 13, 0, -25, 93, 4));

// console.log(Math.max(55, Infinity, 0, -25, 93, 4));
// console.log(Math.min(55, 13, 0, -Infinity, 93, 4));

// // Métodos Ceil, Floor, Round

// const pi = Math.PI;

// console.log(Math.ceil(pi));
// console.log(Math.floor(pi));
// console.log(Math.round(pi));

// // Método Square Root

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

// // Método Random

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// console.log(Math.random() * 10);
// console.log(Math.random() * 50);
// console.log(Math.random() * 30 + 20);

// // Redondeo

// const generadorNumero = () => {
//   return Math.round(Math.random() * 100);
// };

// console.log(generadorNumero());

// // DATE

// console.log(new Date());

// // Constructor

// console.log(new Date(2020, 1, 15));

// const casiNavidad = new Date(2021, 11, 25, 23, 59, 59);
// console.log(casiNavidad);

// // Obtener valores

// const unDia = new Date("December 17, 2021");

// console.log(unDia.toDateString());
// console.log(unDia.toLocaleString());
// console.log(unDia.toLocaleDateString());
// console.log(unDia.toTimeString());

// console.log(hoy.getFullYear());
// console.log(hoy.getMonth());
// console.log(hoy.getDay());

// // Diferencia de fechas

// const unaNavidad = new Date("December 25, 2021");
// console.log(unaNavidad - unDia);

// const milisegundosPorDia = 86400000;
// console.log((unaNavidad - unDia) / milisegundosPorDia);

// // Otra diferencia entre fechas

// const inicio = new Date();

// for (let i = 0; i < 1000; i++) {
//   console.log("haciendo tiempo");
// }

// const final = new Date();
// console.log("El proceso tardó: " + (final - inicio) + " milisegundos");

// // -------------------------------------------------------------

// // MATH

// // Propiedades de Math

// function calcularCircunferencia(diametro) {
//   return diametro * Math.PI;
// }

// console.log(calcularCircunferencia(4));

// // Métodos Min y Max

// console.log(Math.min(5, 8, 3, 6, 2, 9));
// console.log(Math.max(5, 8, 3, 6, 2, 9));

// // Métodos Ceil, Floor, Round

// let notas = [5, 9, 3];

// function promedio(arrNotas) {
//   let suma = 0;
//   arrNotas.forEach((element) => {
//     suma += element;
//   });
//   return suma / arrNotas.length;
// }

// let prom = promedio(notas);
// console.log(prom);

// // CEIL: el entero mayor o igual más próximo
// // La profe fue buena
// console.log(Math.ceil(prom));
// // FLOOR: el entero menor o igual más próximo
// // La profe fue mala
// console.log(Math.floor(prom));
// // ROUND
// // n >= .5 => redondea para arriba
// // n < .5 => redondea para abajo
// console.log(Math.round(prom));

// // Método Square Root

// let raiz2 = Math.sqrt(2);
// let raiz9 = Math.sqrt(9);

// console.log(raiz2);
// console.log(raiz9);

// let cuadradoRaiz2 = Math.pow(raiz2, 2);
// let cuadradoRaiz9 = Math.pow(raiz9, 2);

// console.log(Math.round(cuadradoRaiz2));
// console.log(cuadradoRaiz9);

// // Método Random

// let alumnos = ["Arnaldo", "Emiliano", "Tomas", "Gonzalo", "Jonathan"];

// function ganadorSorteo(arrAlumnos) {
//   let posicion = Math.round(Math.random() * arrAlumnos.length - 1);
//   return arrAlumnos[posicion];
// }

// console.log(ganadorSorteo(alumnos));

// // DATE

// let hoy = new Date();
// console.log(hoy);

// // Constructor

// let navidad = new Date(2023, 11, 25, 0, 0, 1);
// console.log(navidad);

// let otraNavidad = new Date("December 25, 2023 00:00:01");
// console.log(otraNavidad);

// // Obtener valores

// console.log(navidad.getFullYear());
// console.log(navidad.getMonth() + 1);
// console.log(navidad.getDate());
// console.log(navidad.getDay());

// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());

// // Diferencia de fechas

// let nacimiento = new Date(1998, 5, 31);

// function calcularEdad(fechaNacimiento) {
//   let hoy = new Date();
//   let difEnMilisegundos = hoy - fechaNacimiento;
//   let miliPorAnio = 31536000000; // 365.25 días por año
//   let difEnAnios = difEnMilisegundos / miliPorAnio;
//   return Math.floor(difEnAnios);
// }

// console.log(calcularEdad(nacimiento));

// ================================================================

// const fecha = new Date()

// console.log(fecha.toLocaleDateString())

const pi = Math.PI

const nota = 60.6

// console.log(Math.round(pi))

// const numeros = [1, 5, 7, 10, 40, 4, 50]

// console.log(Math.min(...numeros))

console.log(Math.round(nota))

console.log(Math.sqrt(20))

console.log(Math.random() * 70 + 30)
