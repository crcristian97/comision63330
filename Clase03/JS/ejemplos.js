// Ejemplos de ciclos en JavaScript

// -------- EJEMPLOS CON FOR --------

// 1. Contador simple del 1 al 5
console.log("Ejemplo 1 - FOR: Contador simple");
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}

// 2. Recorrer un array de frutas
console.log("\nEjemplo 2 - FOR: Recorrer array");
const frutas = ["Manzana", "Pera", "Banana", "Naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

// 3. Tabla de multiplicar
console.log("\nEjemplo 3 - FOR: Tabla de multiplicar del 5");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// -------- EJEMPLOS CON WHILE --------

// 1. Contador regresivo
console.log("\nEjemplo 1 - WHILE: Contador regresivo");
let countdown = 5;
while (countdown > 0) {
    console.log(`Tiempo restante: ${countdown} segundos`);
    countdown--;
}

// 2. Adivinar un número
console.log("\nEjemplo 2 - WHILE: Juego de adivinar");
let numeroSecreto = 7;
let intento = 1;
while (intento <= 3) {
    console.log(`Intento ${intento}: Adivina el número del 1 al 10`); //ESM6 (TEMPLATE STRING)
    console.log("El numero secreto es: "+numeroSecreto); //ESM5
    intento++;
}

// 3. Acumulador de suma
console.log("\nEjemplo 3 - WHILE: Acumulador");
let suma = 0;
let numero = 1;
while (numero <= 5) {
    suma += numero;
    console.log(`Sumando ${numero}: Total actual = ${suma}`); //ESM6 (TEMPLATE STRING)
    numero++;
}

// -------- EJEMPLOS CON DO WHILE --------

// 1. Menú de opciones
console.log("\nEjemplo 1 - DO WHILE: Menú");
let opcion = 1;
do {
    console.log(`
    Menú:
    1. Ver saldo
    2. Depositar
    3. Retirar
    4. Salir
    `);
    opcion++;
} while (opcion <= 3);

// 2. Validación de entrada
console.log("\nEjemplo 2 - DO WHILE: Validación");
let entrada = "";
do {
    console.log("Por favor, ingrese un número positivo");
    entrada = "5"; // Simulación de entrada
} while (parseInt(entrada) <= 0);

// 3. Lanzamiento de dado
console.log("\nEjemplo 3 - DO WHILE: Dado");
let resultado;
let lanzamientos = 0;
do {
    resultado = Math.floor(Math.random() * 6) + 1;
    console.log(`Lanzamiento ${lanzamientos + 1}: ${resultado}`);
    lanzamientos++;
} while (resultado !== 6 && lanzamientos < 3);

/* 
Explicación de las diferencias:

FOR: 
- Mejor cuando sabemos exactamente cuántas iteraciones necesitamos
- Útil para recorrer arrays o realizar conteos específicos
- La inicialización, condición y actualización están en la misma línea

WHILE:
- Mejor cuando no sabemos cuántas iteraciones necesitaremos
- La condición se evalúa antes de ejecutar el código
- Útil para validaciones que dependen de condiciones externas

DO WHILE:
- Similar al while, pero garantiza al menos una ejecución del código
- La condición se evalúa después de ejecutar el código
- Útil para menús o validaciones donde necesitamos al menos una ejecución
*/


//COMO ITERAR ARRAY DE OBJECTOS . CLASE AVANZADA (EL QUE SE ANIMA QUE LO BUSQUE O LO PRACTIQUE)
//INVESTIGAR EL METODO TRIM().