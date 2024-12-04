document.addEventListener('DOMContentLoaded', () => {
    class ProductoFarmacia {
        constructor(id = 0, img = '' , nombre = '', categoria = '', principioActivo = '', presentacion = '', precioNormal = '', precioOferta = 0, stock = ''){
            this.id = id;
            this.img = img;
            this.nombre = nombre;
            this.categoria = categoria;
            this.presentacion = presentacion;
            this.principioActivo = principioActivo;
            this.precioNormal = precioNormal;
            this.precioOferta = precioOferta;
            this.stock = stock;
        }
    }
    const productos = [
        new ProductoFarmacia(1, "./public/amoxidal.jpg", "Amoxidal", "Antibióticos", "Amoxicilina", "500mg",  5080, 3100, 50 ),
        new ProductoFarmacia(2, "./public/novalgina.jpg", "Novalgina", "Antifebriles", "Dipirona sódica", "50mg/ml", 8699, null, 12 ),
        new ProductoFarmacia(3, "./public/actron.jpg", "Actron", "Analgésicos", "Ibuprofeno", "600mg", 6599, 4669, 38),
        new ProductoFarmacia(4, "./public/tafirol.jpg", "Tafirol", "Analgésicos", "Paracetamol", "500mg", 2560, null, 76),
        new ProductoFarmacia(5, "./public/dipirona-klonal.jpg", "Dipirona Klonal", "Antifebriles", "Dipirona", "250mg", 2899, null, 5),
        new ProductoFarmacia(6, "./public/azibiotic.png", "Azibiotic", "Antibióticos", "Azitromicina", "500mg", 14599, 7000, 12),
        new ProductoFarmacia(7, "./public/rivotril.jpg", "Rivotril", "Benzodiacepinas", "Clonazepam", "0.5mg", 20599, null, 2),
        new ProductoFarmacia(8, "./public/tensium.jpg", "Tensium", "Benzodiacepinas", "Alprazolam", "2mg", 34599, 19000, 1),
    ];
    
    const container = document.getElementById('product-cards') || [];
    const form = document.createElement('form') || [];
    form.className = 'form';
    form.innerHTML = `
        <label for="medicamento" class="form-label">Seleccionar Medicamento:</label>
        <select id="medicamento" class="form-select">
        ${productos.map(({ id, nombre, presentacion }) => `<option value="${id}">${nombre} (${presentacion})</option>`).join('')}
        </select>
        <label for="cantidad" class="form-label mt-3">Cantidad:</label>
        <input type="number" id="cantidad" class="form-control" min="1" value="1">
        <button type="button" id="agregar-carrito" class="btn btn-primary mt-3">Agregar al Carrito</button>
    `;
    document.getElementById('form-container').appendChild(form);

    productos.forEach(( { img = '', nombre = '', categoria = '', principioActivo = '', presentacion = '', precioNormal = '', precioOferta = 0, stock = '' }) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src = "${img}"/>
            <h3>${nombre}</h3>
            <h5>(${categoria})</h5>
            <p>Principio Activo: ${principioActivo} ${presentacion}</></p>
            <h5>Stock disponible: ${stock}</h5>
            <p class="price">
                Precio: ${precioOferta ? `<span class="discounted-price">$${precioNormal}</span> $${precioOferta}`
                    : `$${precioNormal}`
                }
            </p>
        `;
        container.appendChild(card);
    });
});
