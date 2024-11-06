//let nombreIngresado = prompt("Ingresar nombre");
//alert("El nombre ingresado es " + nombreIngresado);

// si lo queremos repetir 2 veces mas , 
//nombreIngresado = prompt("Ingresar nombre");
//alert("El nombre ingresado es " + nombreIngresado);
//nombreIngresado = prompt("Ingresar nombre");
//alert("El nombre ingresado es " + nombreIngresado);

//AHORA CON LAS FUNCIONES
// palabra reservada function
// el nombre va en miniscula, preferentemente camelcase
// entre 5 y 10 lineas de codigo, tirando a 5 lineas de codigo
// las funciones se pueden importar y exportar , esto nos da margen a optimizacion de codigo
// se utilizan () y luego {}

function saludarUsuario (){
    let nameIngresado = prompt('Ingresar nombre');
    alert('su nombre es ' + nameIngresado);
}

//saludarUsuario();
//saludarUsuario();
//saludarUsuario();

//tenemos que me pide la validacion en el ingresar usuario (html) ---> funcion validarEmail
//me pide la validacion del email en el perfil de contratos (html) ---> funcion validarEmail
//en ambos me pide un input con email y tiene validacion ese email

//Creo en un archivo la funcion validarEmail(aca la export) y luego en el otro html la importo

//Parametros: son variables que se le envian a la funciones
//nos sirven para simplicar los procesos
//muchas veces lo vamos a necesitar para desarrollar logica
// se le tiene que poner nombres de acuerdo a la funcion que creamos
//se puede recibir multiples parametros n10
//IMPORTA EL ORDEN

//ENTENDEMOS LA ESTRUCTURA
const nombreUsuario = prompt('nombre');
const apellidoUsuario = prompt('apellido');

function conParametros(parametro1, parametro2) {
    console.log("ENTRAMOSSS");
    console.log(parametro1 + " " + parametro2);
}

conParametros("hola", "coders");
conParametros(nombreUsuario, apellidoUsuario);


//Ejemplo mas avanzado

function formValidacion(nombre, apellido, email){
    //IF,ELSE IFF....
    //LOGICA
}
formValidacion(nombre, apellido, email);


//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar (mensaje) {
    console.log(mensaje)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);     
//resultado va a ser 9       
mostrar(resultado); 


// string+
// number
// boolean

// function
const dni = prompt('ingrese su dni');

function edadDNI(dniUsuario){
    //logica para saber la edad 
    //en base al dni que me envia el usuario
}

let edadUsuario = edadDNI(dni);

if(edadUsuario >= 18){
    console.log("podes entrar")
}else{
    console.log("no podes entrar");
}


//funciones anonimas
// no llevan nombre y se le asigna a una variable inmediatamente
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }

const sumaEdad  = (edadUsuario, añoUsuario) => { 
    if(edadUsuario){

    }else{

    }
}







