//QUE ES UNA VARIABLE?
//ES UN ESPACIO DE MEMORIA QUE UTILIZA JAVASCRIPT

// 3 FORMAS DE DECLARAR VARIABLES
// 6 tipos de valores en JS
// las variables pueden tener CUALQUIER TIPO DE VALOR
// string, number
// var brebaje = 'Gin Bombay Sapphire'; //---> no es buena practica porque usamos VAR. ES5

let brebaje = 'Gin Bombay Sapphire'; //--->ES6 , STRING
// yo puedo reasignar esta variable
brebaje = 'Fernet';

const precioBotella = 700; //--->ES6 , NUMBER
//precioBotella = 800; NO SE PUEDE REASIGNAR LA VARIABLE
const vodka = 'Vodka';
const ginBombay = 'Gin Bombay Sapphire';
const ronMalibu = 'Ron Malibu';

//buenas practicas de la declaracion de variables
//siempre tirar a const
//puede ser camelcase,snakecase
//CAMELCASE
const nombreAlumno = 'matias alaniz';
//SNAKECASE
const nombre_alumno = 'matias crevecouere';
// LO MEJOR ES SEGUIR LA SINTAXIS DE LA EMPRESA / O DE LA QUE USTEDES DECLARAR

//SIMULACION DE LA CALCULADORA
const primerNumero = parseInt(prompt('Elegi el primer numero'));
const segundoNumero = prompt('Elegi el 2do numero');
//el metodo parseInt permite convertir string a number
//parseFloat ( lean que es este metodo )
const segundoNumeroParse = parseInt(segundoNumero);

const resultadoSuma = primerNumero + segundoNumeroParse; //concatenacion 
console.log('El resultado es: ' + resultadoSuma);

//simulacion de titulo de la comision
const comisionJs = 'Comision';
const numeroComision = 43115;
const comision43115 = comisionJs + ' ' +  numeroComision;
console.log('numero de comision: ' + comision43115);


alert('Te sacaremos de la pagina web:' + comision43115);
