const suma  = (primerNumero,segundoNumero) => {
    debugger
    return primerNumero + segundoNumero
};

const resta = (a,b) => {
    debugger
    return a - b
};
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()

const iva = precioInicial => {
    debugger
    return precioInicial * 0.21
};

let precioProducto = 500;
let descuento = 50;

//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento); 
console.log(nuevoPrecio)