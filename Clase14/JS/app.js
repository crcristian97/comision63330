//llamarlo con un fetch al archivo JSON


fetch('./JSON/producto.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error al obtener los datos:', error));


// y con asincronismos se llama de la siguiente manera

async function obtenerDatos() {
    const response = await fetch('./JSON/producto.json');
    const data = await response.json();
    carritoCompra(data);
}

obtenerDatos();