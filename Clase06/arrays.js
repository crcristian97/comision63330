//Arrays es un tipo de dato.
//Los arrays pueden ser de numeros, string, objectos, funciones, mixtos, arrays, etc.
//Los elementos del array siempre su indice es 0

const tutores = ['Matias', 'Nicolas'];
const profesor = 'Cristian';

const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.length );

//ANTES
/*const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}*/

//AHORA
const alumnos = ['Genaro', 'Jesus', 'Jorge', 'Diego', 'Constanza'];
/*for (let i= 0; i < alumnos.length; i++) {
    debugger
    alert(alumnos[i]);
    //CREAR EL DISEÑO DE CADA CART
    //QUE SE VE EN LA CLASE
}*/

//SE AGREGA EL ELEMENTO CUANDO SE DECLARA EL PUSH
//push te sirve para agregar elementos+
//te agrega el elemento al final
alumnos.push('tomas');

//unshift te agrega el elemento al principio
//al agregarse adelante de todo, obtiene el indice 0

//metodo shift: sirve para eliminar el primer elemento del array
//metodo pop: sirve para eliminar el ultimo elemento del array

//Splice elimina elementos del medio del array
//se le pasa 2 argumentos/parametros
//el primero es la posicion donde va arrancar
//el segundo es la cantidad de elements a borrar
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2);

console.log(nombres);


const alumnosComision  = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = alumnosComision.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']

//INMUTABILIDAD: NO TOCAR LOS ELEMENOS ORIGINALES


//crear una nueva variable que luego de una funcion te devuelva la variable alfabeticamente

//metodo reverse tenes a vanesa

let carritoProductos = [];

for(let i = 0; i < carritoProductos.length; i++){
    if(carritoProductos.length <= 0){
        console.log('Agregá productos y conseguí envío gratis');
        console.log('Para obtener envío gratis suma productos de un mismo vendedor.');
    }
}


const nombresAlumnos = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    debugger
    // busco su índice en el array
    let index = nombresAlumnos.indexOf(nombre).toLowerCase();

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index >= 0 ) {
        nombresAlumnos.splice(index, 1)
    } 
};

eliminar(prompt('Que alumno queres eliminar').toLowerCase());