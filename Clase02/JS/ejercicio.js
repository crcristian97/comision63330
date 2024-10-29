//Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(),
//compare las entradas y, en función de ciertas condiciones, muestre un resultado.

const usuarioCarnet = prompt('Tenes carnet?');
const edadUsarioCarnet = parseInt(prompt('Decime tu edad'));

if(edadUsarioCarnet >= 18){
    if(usuarioCarnet === 'si'){
        console.log('Excelente,podes seguir el viaje');
    }else {
        console.log('te voy a retener el vehiculo');
    }
}else {
    console.log('voy a tener que llamar a tus padres');
}

if(edadUsarioCarnet >= 18 && usuarioCarnet === 'si'){
    //Podes pasar tranquilamente
}else if (edadUsarioCarnet < 18 && usuarioCarnet === 'si'){
    console.log("Tenes que ser mayor para manejar.");
}else if(usuarioCarnet === 'no' && edadUsarioCarnet > 18){
    console.log("Deberias sacarte el carnet.");
}else{
    console.log("Tenes que ser mayor para manejar y sacar el carnet.");
}