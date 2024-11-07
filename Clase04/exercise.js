const nombreUsuario = prompt("Ingrese su nombre de usuario");

console.log(nombreUsuario);
console.log(typeof nombreUsuario);

const edadUsuario = parseInt(prompt("Ingrese su edad") );

console.log(edadUsuario);
console.log(typeof edadUsuario);

alert(`Bienvenido ${nombreUsuario}, tu edad es ${edadUsuario}`);

if(typeof edadUsuario === "number"){
    if(edadUsuario >= 18){
        alert("Bienvenido a la pagina");
    }else{
        alert("No puedes ingresar a la pagina");
    }
}