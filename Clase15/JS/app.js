//1 PARTE DE LA PROMESA
//ESTE ES EL CUERPO DE COMO SE ARMAN LAS PROMESAS
// 2 ESTADOS, RESUELTO Y RECHAZADO
//ESM5

const BD = [
    {id: 1, nombre: 'Producto 1', precio: 1500},
    {id: 2, nombre: 'Producto 2', precio: 2500},
    {id: 3, nombre: 'Producto 3', precio: 3500},
    {id: 4, nombre: 'Producto 4', precio: 3500},
]


const eventoFuturo = () => {
    return new Promise( (resolve, reject) => {
        //cuerpo de la promesa
        setTimeout(() => {
            resolve(BD)
        }, 3000)
    } )
}


//ESTO ES LA 2 PARTE DE LA PROMESA
//THEN QUE DECIMOS LA REPUESTA ESTA RESULTADA
//CATCH RESPUESTA ESTA RECHAZADA
//EMS5
eventoFuturo()
    .then( (resultado) => {
        console.log(resultado)
        //DONDE RESULTADO SON LOS DATOS DE LA API
        renderDOM(resultado);
    } )
    .catch( (error) => {
        //error: 404 not found
        //error: 405
        //500
        if(error === 400){
            messageAlert('Contactese con su administrador', 'error')
        }
        console.log(error)
    } )
    .finally( () => {
        console.log("FINALLY")
    } )

//NOS FALTA VER EMS6
//ASYNC AWAIT
//EMS6
const obtenerProductos = async () => {
    try {
        const resultado = await fetch('https://6760b6266be7889dc35eb000.mockapi.io/api/cerverceria/employed');
        const data = await resultado.json();
        console.log(data);
    } catch (error) {
        if(error === 400){
            messageAlert('Contactese con su administrador', 'error')
        }
        console.log(error);
    } finally {
        console.log("FINALLY");
    }
}

obtenerProductos();