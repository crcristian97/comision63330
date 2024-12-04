


const productoMercadoLibre = {
  id: 1,
  title: "Producto 1",
  price: 100,
  currency_id: "ARS",
  available_quantity: 10,
  category: {
    product_category_id: "123456",
    name: "Medicamentos"  
  },
}

const { category: { product_category_id} } = productoMercadoLibre;

const productoMercadoLibre2 = {
  id: 2,
  title: "Producto 2",
  price: 200,
  currency_id: "ARS",
  available_quantity: 10,
}

console.log(productoMercadoLibre.category.name);
console.log(productoMercadoLibre2?.category?.name || 'No tiene categoria');

//ES5 -- Aca no esta la desestructuracion
function obtenerProducto(producto) {
  const idProduct = producto.id;

  if(idProduct){
    console.log(idProduct)
  }
}

//ES6 -- Aca esta la desestructuracion
function obtenerProducto2( { id = 0 }){
  if(id){
    console.log(id)
  }
}

obtenerProducto(productoMercadoLibre);
obtenerProducto2(productoMercadoLibre2);

const personanNumero1 = {
  _id: '672c1be5b33cdc77eb9213f0',
  name: "Lucas Fariña",
  email: "francolucas690@gmail.com",
  hasEntered: false,
  createdAt: '2024-11-07T01:46:13.905+00:00',
  updatedAt: '2024-11-07T01:46:14.098+00:00'
}

const { updatedAt: fechaActualizacion } = personanNumero1;

console.log(fechaActualizacion);