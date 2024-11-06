// Resumen de Funciones en JavaScript

// 1. Función Declarativa (Function Declaration)
// Se declara usando la palabra clave 'function'
// Se puede llamar antes de ser declarada (hoisting)
function saludar(nombre) {
    console.log("Hola " + nombre);
}

// 2. Función Expresiva (Function Expression) 
// Se asigna a una variable
// No tiene hoisting
const despedir = function(nombre) {
    console.log("Adiós " + nombre);
};

// 3. Función Flecha (Arrow Function)
// Sintaxis más corta, introducida en ES6
// No tiene su propio 'this'
const sumar = (a, b) => a + b;

// 4. Funciones con return
// Ejemplo 1: Return simple
function calcularArea(base, altura) {
    return base * altura;  // Devuelve directamente el cálculo
}

// Ejemplo 2: Return con múltiples condiciones
function evaluarNota(puntuacion) {
    if (puntuacion >= 90) return "A";
    if (puntuacion >= 80) return "B";
    if (puntuacion >= 70) return "C";
    return "F";
}

// Ejemplo 3: Return de objetos
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
        saludar: function() {
            return `Hola, soy ${this.nombre}`;
        }
    };
}

// Ejemplo 4: Return en funciones asíncronas
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://api.ejemplo.com/datos');
        return await respuesta.json();  // Retorna una promesa
    } catch (error) {
        return null;  // Retorna null en caso de error
    }
}

// 5. Función sin return (void)
function mostrarMensaje() {
    console.log("Esta función no devuelve nada");
}

// 6. Función con parámetros por defecto
function configurar(color = "rojo", tamaño = "mediano") {
    console.log(`Color: ${color}, Tamaño: ${tamaño}`);
}

// Ejemplos de uso:
console.log("\nEjemplos de uso de funciones con return:");

const area = calcularArea(5, 3);
console.log("Área calculada:", area);

const calificacion = evaluarNota(85);
console.log("Calificación:", calificacion);

const persona = crearPersona("Ana", 25);
console.log("Persona creada:", persona);
console.log("Saludo:", persona.saludar());

/* 
Cuándo usar return:
1. Cuando necesitas obtener un valor de la función para usarlo después
2. Para cálculos y operaciones que requieren un resultado
3. Cuando la función debe devolver datos para su uso posterior
4. En funciones que crean y devuelven objetos
5. En funciones que procesan datos y necesitan devolver resultados
6. En funciones que implementan lógica condicional con diferentes resultados

Cuándo no usar return:
1. En funciones que solo realizan acciones (efectos secundarios)
2. Cuando la función solo modifica elementos externos
3. En funciones que solo muestran información (console.log)
4. En funciones que manejan eventos sin necesidad de devolver valores
*/

//TAREA PARA LEER//
//APRENDER A EXPORTAR E IMPORTAR FUNCIONES
//PRINCIPIOS SOLID
//ARRAYS (VER LAS DIAPOSITIVAS)