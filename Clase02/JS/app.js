// IF 
// se utiliza palabra reservada if, luego la condicion , y se abren llaves
// la condicion tiene 2 valores : true o false
// son tipos valores BOOLEAN

const edadUsuario = 23;

if(edadUsuario == 18){
    console.log("Podes entrar");
}

// IF ELSE
if(edadUsuario == 18){
    console.log("podes entrar");
}else {
    console.log("no podes entrar");
}

if(edadUsuario == 18){
    console.log("podes entrar");
}else if(edadUsuario == 19){
    console.log("podes entrar");
}else if(edadUsuario == 20){
    console.log("podes entrar");
}else if(edadUsuario == 21){
    console.log("podes entrar");
}else if(edadUsuario == 22){
    console.log("podes entrar");
}else if(edadUsuario == 23){
    console.log("podes entrar");
}else {
    console.log("no podes entrar");
}

if(edadUsuario >= 18){
    console.log("podes entrar");
}else{
    console.log("no podes entrar");
}
/////////////////////Nuevo ejemplo
// doble igual == compara el valor del dato
// triple igual === compara el valor y el tipo de dato

//Cuando hablo de tipo de datos me refiero a : string, number, boolean ...

const numeroUsuario = prompt("indicame un numero"); // 6 en string 

if(numeroUsuario == 6){
    console.log("tenes el numero mas alto del dado")
}

if(numeroUsuario === 6){
    console.log("tenes el numero mas alto del dado")
}


const nombreIngresado   = prompt("Ingresar nombre");
const apellidoIngresado = prompt("Ingresar apellido");
debugger
if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}

// Crear codigo para que yo completo el nombre pero no el apellido, me diga ingrese su apellido.
// Crear codigo para que yo completo el apellido pero no el nombre, me diga ingrese su nombre.
// Crear codigo para validar que el usuario no me escriba un numero.

//Caracteristicas del operador &&
// para que la condicion total sea true, las comparaciones tiene que ser true;
// puede haber multiples comparaciones

//Operador OR 
// para que la condicion total sea true, tiene que haber una comparacion que sea true;

const nombreIngresadoUsuario = prompt("Ingresar nombre");
//ANA --- entra
//ana --- entra
//AnA --- no entra
//anA --- no entra
//ANa --- no entra
//Ana --- no entra


if((nombreIngresadoUsuario === "ANA") || (nombreIngresadoUsuario === "ana") || (nombreIngresadoUsuario === "Ana") || (nombreIngresadoUsuario === "ANa") || (nombreIngresadoUsuario === "ANA") || (nombreIngresadoUsuario === "AnA")){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
}

//Esto es refactorizado
if(nombreIngresadoUsuario.toLowerCase() === "ana") {
    alert("El nombre ingresado es Ana");
} else {
    alert("El nombre ingresado NO ES Ana");
}
