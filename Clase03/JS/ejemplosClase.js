//mostrar numeros pares
for (let i = 1; i <= 10; i++) {
    // Si el número es impar, salta a la siguiente iteración
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i); // Muestra: 2, 4, 6, 8, 10
}

//saltar multiples de 3

for (let i = 1; i <= 20; i++) {
    // Salta los múltiplos de 3
    if (i % 3 === 0) {
        continue;
    }
    console.log(i); // Muestra: 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20
}

//saltar las vocales
let texto = "JavaScript";
for (let i = 0; i < texto.length; i++) {
    // Salta las vocales
    if ("aeiouAEIOU".includes(texto[i])) {
        continue;
    }
    console.log(texto[i]); // Muestra: J, v, S, c, r, p, t
}

//saltar numeros de un rango
for (let i = 1; i <= 15; i++) {
    // Salta números entre 5 y 10
    if (i >= 5 && i <= 10) {
        continue;
    }
    console.log(i); // Muestra: 1, 2, 3, 4, 11, 12, 13, 14, 15
}

//busca el primer numero divisive 

for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
        console.log(`Primer múltiplo de 5 encontrado: ${i}`);
        break;
    }
    console.log(`Revisando número: ${i}`);
}


let texto2 = "JavaScript";
for (let i = 0; i < texto2.length; i++) {
    if ("aeiouAEIOU".includes(texto2[i])) {
        console.log(`Primera vocal encontrada: ${texto2[i]} en posición ${i}`);
        break;
    }
}