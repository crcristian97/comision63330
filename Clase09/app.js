const parrafo1 = document.getElementById("parrafo1");
const divApp = document.getElementById("app");

console.log(parrafo1);
console.log(divApp);

//obtener los elementos por clase
//obtener el elemento por clase
const paises = document.getElementsByClassName("paises");
console.log("Esto son los nodos: ", paises);
for ( const pais of paises){
    console.log("Esto son los valores de los nodos: ", pais.innerHTML);
    if (pais.innerHTML === "AR"){
        paises[0].innerHTML = "Argentina";
    }
    if (pais.innerHTML === "CL"){
        paises[1].innerHTML = "Chile";
    }
    if (pais.innerHTML === "UY"){
        paises[2].innerHTML = "Uruguay";
    }
}

let producto = { id: 1,  nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio; //EMS5
let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`; //EMS6
console.log(concatenado);
console.log(plantilla);