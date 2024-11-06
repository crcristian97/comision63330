

let entrada = prompt("Ingresar un nombre");
debugger;
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        case "PEDRO":
            alert("HOLA PEDRO");
            break;
        case "MARIA":
            alert("HOLA MARIA");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
let dia = prompt("Ingrese un día de la semana").toLowerCase();

switch(dia) {
    case "login":
        //crear la logica para redireccionarnte al html
        //aca haces toda tu logica
        break;
    case "martes":
        alert("Segundo día de la semana"); 
        break;
    case "miercoles":
        alert("Tercer día de la semana");
        break;
    case "jueves":
        alert("Cuarto día de la semana");
        break;
    case "viernes":
        alert("Quinto día de la semana");
        break;
    case "sabado":
        alert("Sexto día de la semana");
        break;
    case "domingo":
        alert("Séptimo día de la semana");
        break;
    default:
        alert("No es un día válido");
        break;
}

let dia2 = prompt("Ingrese un día de la semana").toLowerCase().trim();
//dni = "40109439"
//dni = "40.109.439"
if (dia2 === "lunes") {
    alert("Primer día de la semana");
} else if (dia2 === "martes") {
    alert("Segundo día de la semana");
} else if (dia2 === "miercoles") {
    alert("Tercer día de la semana");
} else if (dia2 === "jueves") {
    alert("Cuarto día de la semana");
} else if (dia2 === "viernes") {
    alert("Quinto día de la semana");
} else if (dia2 === "sabado") {
    alert("Sexto día de la semana");
} else if (dia2 === "domingo") {
    alert("Séptimo día de la semana");
} else {
    alert("No es un día válido");
}

