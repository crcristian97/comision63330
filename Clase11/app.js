
//cuando tengo que enviar un objeto, debo convertirlo a string
//para convertirlo a string utilizo JSON.stringify
const perfilUsuario2 = {nombre: "Juan", apellido: "Perez"};
localStorage.setItem("perfilUsuario", JSON.stringify(perfilUsuario2));

//cuando recupero un objeto, debo convertirlo a json
const perfilUsuarioString = localStorage.getItem("perfilUsuario") || {}; 
const perfilUsuario = JSON.parse(perfilUsuarioString);
console.log(perfilUsuario);




