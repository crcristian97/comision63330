function mayorQue(numero) {
    return (resultado) => {
        return resultado > numero
    }
}
let mayorQueDiez = mayorQue(10)
let mayorQueCero = (m) => m > 10
console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )


function asignarOperacion(op) {
    if (op === "sumar") {
        return (a, b) => a + b
    } else if (op === "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

let sumar = (a, b) => a + b; //2DA FORMA   

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2


//sintaxis complicada 
function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

const numeros= [1, 2, 3, 4];


//sintaxis mas amigable
const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado) // [2, 4, 6, 8]