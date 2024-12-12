const alumno1 = {
  nombre: 'Renato',
  apellido: 'Gomez',
  edad: 20,
  email: 'renato@gmail.com',
  curso: 'Javascript',
  materias: ['Javascript', 'React', 'Node', 'MongoDB'],
  carrera: 'Full Stack Developer',
  rol: 'Estudiante',
  fechaInicio: '2024-08-10'
}

//spreed de objectos
const alumno2 = {
    ...alumno1,
    edad: 35,
    email: 'carlos@gmail.com',
    nombre: 'Carlos',
    apellido: 'Folla'
}

console.log(alumno2);

function sumar(...args) {
    debugger
    console.log(args);
}
sumar(1, 2);
sumar(1, 2, 4);