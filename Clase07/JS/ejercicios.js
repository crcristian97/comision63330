// Ejercicios básicos a avanzados de métodos de arrays

// Array de ejemplo con productos
const productos = [
    { id: 1, nombre: "Arroz", precio: 125, categoria: "Alimentos" },
    { id: 2, nombre: "Fideos", precio: 70, categoria: "Alimentos" },
    { id: 3, nombre: "Pan", precio: 50, categoria: "Panadería" },
    { id: 4, nombre: "Leche", precio: 180, categoria: "Lácteos" },
    { id: 5, nombre: "Yogur", precio: 90, categoria: "Lácteos" }
];

// 1. FOREACH - Básico: Imprimir todos los productos
console.log("--- forEach Básico ---");
productos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

// 2. FOREACH - Avanzado: Calcular total por categoría
console.log("\n--- forEach Avanzado ---");
const totalPorCategoria = {};
productos.forEach(producto => {
    if (totalPorCategoria[producto.categoria]) {
        totalPorCategoria[producto.categoria] += producto.precio;
    } else {
        totalPorCategoria[producto.categoria] = producto.precio;
    }
});
console.log("Total por categoría:", totalPorCategoria);

// 3. FIND - Básico: Encontrar producto por id
console.log("\n--- find Básico ---");
const productoId3 = productos.find(producto => producto.id === 3);
console.log("Producto con ID 3:", productoId3);

// 4. FIND - Avanzado: Encontrar primer producto que cumpla múltiples condiciones
console.log("\n--- find Avanzado ---");
const productoEspecial = productos.find(producto => 
    producto.precio < 100 && producto.categoria === "Lácteos"
);
console.log("Primer lácteo menor a $100:", productoEspecial);

// 5. FILTER - Básico: Filtrar por categoría
console.log("\n--- filter Básico ---");
const lacteos = productos.filter(producto => producto.categoria === "Lácteos");
console.log("Productos lácteos:", lacteos);

// 6. FILTER - Avanzado: Filtrar con múltiples condiciones
console.log("\n--- filter Avanzado ---");
const productosEspeciales = productos.filter(producto => 
    producto.precio > 100 || (producto.categoria === "Alimentos" && producto.precio < 80)
);
console.log("Productos especiales:", productosEspeciales);

// 7. SOME - Básico: Verificar si existe algún producto de cierta categoría
console.log("\n--- some Básico ---");
const hayPanaderia = productos.some(producto => producto.categoria === "Panadería");
console.log("¿Hay productos de panadería?", hayPanaderia);

// 8. SOME - Avanzado: Verificar condición compleja
console.log("\n--- some Avanzado ---");
const hayProductoCaro = productos.some(producto => 
    producto.precio > 150 && producto.categoria !== "Lácteos"
);
console.log("¿Hay productos no lácteos caros?", hayProductoCaro);

// 9. MAP - Básico: Crear array de nombres
console.log("\n--- map Básico ---");
const nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de productos:", nombresProductos);

// 10. MAP - Avanzado: Transformar objetos con cálculos
console.log("\n--- map Avanzado ---");
const productosConDescuento = productos.map(producto => ({
    ...producto,
    precioOriginal: producto.precio,
    precioConDescuento: producto.precio * 0.85,
    ahorro: producto.precio * 0.15
}));
console.log("Productos con descuento:", productosConDescuento);

// 11. REDUCE - Básico: Sumar todos los precios
console.log("\n--- reduce Básico ---");
const totalPrecios = productos.reduce((acc, producto) => acc + producto.precio, 0);
console.log("Total de precios:", totalPrecios);

// 12. REDUCE - Avanzado: Crear objeto agrupado por categoría
console.log("\n--- reduce Avanzado ---");
const productosAgrupados = productos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) {
        acc[producto.categoria] = [];
    }
    acc[producto.categoria].push(producto);
    return acc;
}, {});
console.log("Productos agrupados:", productosAgrupados);

// 13. SORT - Básico: Ordenar por precio ascendente
console.log("\n--- sort Básico ---");
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados por precio:", productosOrdenados);

// 14. SORT - Avanzado: Ordenar por múltiples criterios
console.log("\n--- sort Avanzado ---");
const productosOrdenadosComplejo = [...productos].sort((a, b) => {
    if (a.categoria !== b.categoria) {
        return a.categoria.localeCompare(b.categoria);
    }
    return b.precio - a.precio;
});
console.log("Productos ordenados por categoría y precio:", productosOrdenadosComplejo);
