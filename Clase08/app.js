const peliculas = [
    { titulo: "El Padrino", año: 1972, genero: "Drama" },
    { titulo: "Pulp Fiction", año: 1994, genero: "Crimen" },
    { titulo: "El Señor de los Anillos", año: 2001, genero: "Fantasía" },
    { titulo: "Matrix", año: 1999, genero: "Ciencia Ficción" },
    { titulo: "Forrest Gump", año: 1994, genero: "Drama" },
    { titulo: "El Rey León", año: 1994, genero: "Animación" },
    { titulo: "Titanic", año: 1997, genero: "Romance" },
    { titulo: "Jurassic Park", año: 1993, genero: "Aventura" },
    { titulo: "Star Wars: Episodio IV", año: 1977, genero: "Ciencia Ficción" },
    { titulo: "El Silencio de los Corderos", año: 1991, genero: "Thriller" },
    { titulo: "Gladiador", año: 2000, genero: "Acción" },
    { titulo: "El Club de la Pelea", año: 1999, genero: "Drama" },
    { titulo: "Inception", año: 2010, genero: "Ciencia Ficción" },
    { titulo: "La Lista de Schindler", año: 1993, genero: "Drama" },
    { titulo: "Los Vengadores", año: 2012, genero: "Acción" },
    { titulo: "El Caballero Oscuro", año: 2008, genero: "Acción" },
    { titulo: "Avatar", año: 2009, genero: "Ciencia Ficción" },
    { titulo: "Interestelar", año: 2014, genero: "Ciencia Ficción" },
    { titulo: "El Laberinto del Fauno", año: 2006, genero: "Fantasía" },
    { titulo: "Parásitos", año: 2019, genero: "Drama" }
];

// Seleccionar una película aleatoria
const indiceAleatorio = Math.floor(Math.random() * peliculas.length);
const peliculaAleatoria = peliculas[indiceAleatorio];

console.log("Película seleccionada al azar:");
console.log(`Título: ${peliculaAleatoria.titulo}`);
console.log(`Año: ${peliculaAleatoria.año}`);
console.log(`Género: ${peliculaAleatoria.genero}`);


//vencimiento a 60 dias
console.time();
const vencimiento = new Date();
vencimiento.setDate(vencimiento.getDate() + 60);
console.log(vencimiento);
console.timeEnd();