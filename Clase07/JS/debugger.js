function parsearFecha(fechaOriginal) {
    debugger
    const numero = validarNumero(fechaOriginal)
    const [dia, mes, anio] = fechaOriginal.split('/');
    return `${mes}-${dia}-${anio}`;
}

function validarNumero(numero) {
    debugger
    return numero * 1
}

parsearFecha("14/11/2024")