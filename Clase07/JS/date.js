//LOGICA DEL PARSEO DE LA FECHA
//importar y exportar

export function parsearFecha(fechaOriginal) {
    debugger
    // Divide la fecha en sus componentes
    const [dia, mes, anio] = fechaOriginal.split('/');
    
    // Retorna la fecha en formato mm-dd-yyyy
    return `${mes}-${dia}-${anio}`;
}

