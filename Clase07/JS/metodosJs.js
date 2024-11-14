let alumnos = [
    { nombre: "Carlos", puntuacion: 95 },
    { nombre: "Ana", puntuacion: 92 },
    { nombre: "Juan", puntuacion: 88 },
    { nombre: "Luis", puntuacion: 85 },
    { nombre: "Lucia", puntuacion: 91 },
    { nombre: "Sofia", puntuacion: 78 },
    { nombre: "Diego", puntuacion: 97 },
];


const puntuacionMinimaTop10 = 85;
const alumnosTop10 = [];

const top10alumnos = alumnos.reduce((acumulador, alumno) => {
    if(alumno.puntuacion >= puntuacionMinimaTop10) {
        acumulador.push(alumno)
    }
    return acumulador
}, []);


alumnos.forEach(alumno => {
    if(alumno.puntuacion >= puntuacionMinimaTop10) {
        alumnosTop10.push(alumno);
    }
})


const cursos = [
    {nombre: 'HTML', precio: 15000},
    {nombre: 'CSS', precio: 15000},
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'NodeJS', precio: 22000},
    {nombre: 'SQL', precio: 22000},
]

const buscador = prompt("Ingrese el nombre del curso que desea buscar")

const resultado = cursos.find((el) => {
    return el.nombre === buscador
})
const resultado2 = cursos.find((el) => {
    return el.nombre === buscador
})

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2)

//ESTO ES MEJOR DESDE MI POV QQUE EL FOR Y LA FUNCION IVA
const actualizado = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.21
    }
})

console.log(actualizado)


const numeros = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => {
    debugger
    return a - b
});  // [ 1, 5, 40, 200 ]
numeros.sort((a, b) => {
    debugger
    return b - a
}); 