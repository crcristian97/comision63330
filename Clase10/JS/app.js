const buttonForm = document.getElementById("btnEnviar");
debugger

//1 forma
//buttonForm.addEventListener("submit", (event) => {
//    debugger
//    event.preventDefault();
//    console.log("click");
//});

//buttonForm.addEventListener("submit", respuestaClick)
//function respuestaClick(){
//    debugger
//    console.log("Respuesta evento");
//}

//2da forma
buttonForm.onclick = (event) =>{
    console.log("Respuesta evento");
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let formulario = event.target
    console.log(formulario.children[0].children[1].value); 
    console.log(formulario.children[1].children[1].value);  

});