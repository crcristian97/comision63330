//Objectos
//son estructuras de datos que permiten almacenar valores de diferentes tipos y acceder a ellos utilizando claves.
//El objecto necesita PROPIEDAD Y VALOR
//PARA AGREGAR PROPIEDADES SE LE AGREGA LA "," DESPUES DEL VALOR

//ANTES
const usuarioNombre = 'cristian';
const usuarioApellido = 'cabrera';
const usuarioEdad = 27;

//CON OBJECTOS
const formUsuario = {
    nombre: 'cristian',
    apellido: 'cabrera',
    edad: 27
};

///CARRITO DE COMPRA
const productoCarrito = {
    imagen: 'path de la imagen',
    masVendido: true,
    descripcion: 'las mejores zapatillas',
    precio: 69999,
    precioDescuento: 48299
};

//Para acceder a los objecto, llamo a la variable y le pongo un "."
//productoCarrito.masVendido
//productoCarrito["masVendido"]

if(productoCarrito.masVendido === true){
    //agrego el banner
}

//REASINGAR UN VALOR DE UN OBJECTO
//Llamar a la propieda y ponerle un "="
productoCarrito.precio = 59999

//ESC5
//this hace referencia a la propiedad del objecto que se pasa por argumento/parametro
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad 	 = edad;
    this.calle  = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
const persona3 = new Persona("Leonel", 35, "Av, caracho");

function ProductosNatura(titulo = '', descripcion = '', precio = 0, precioDescuento = 0){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.precioDescuento = precioDescuento;
}

const producto1 = new ProductosNatura("Lapiz labial", "Muy lindo el color rojo", 3000, 2500);
const producto2 = new ProductosNatura("manteca", "Muy lindo el color rojo", 3000, 2500);
const producto3 = new ProductosNatura("shampoo", "Muy lindo el color rojo", 3000, 2500);

function AlumnosCoderhouse(nombre, apellido, email, rol, top10, comision, tutor){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.rol = rol;
    this.top10 = top10;
    this.comision = comision;
    this.tutor = tutor;
}

const diegoSierra = new AlumnosCoderhouse("Diego", "Sierra", "diegosierra@gmail.com", "alumno", true, 63330, "Matias"); 
