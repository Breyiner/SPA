import './style.css'

let contenedor = document.querySelector('.contenedor');

let rutas = [
  {
    name: 'Categorias',
    path: './src/views/Categorias/index.html',
    controller : './src/views/Categorias/categoriasController.js'
  },
  {
    name: 'Productos',
    path: './src/views/Productos/index.html',
    controller : './src/views/Productos/productosController.js'
  }
]

let solicitud = async (ruta) => {
  let data = await fetch(ruta);

  return data.text();
}

let obtenerInformacion = (vista) => {

  return rutas.find(elemento => elemento.name === vista);
}

let cargarVista = async (vista) => {

  let informacion = obtenerInformacion(vista);
  
  let contenido = await solicitud(informacion.path);
  contenedor.innerHTML = contenido;
}

window.addEventListener("hashchange", () => {
  let vista = location.hash.slice(1);

  cargarVista(vista);
});

window.addEventListener("DOMContentLoaded", () => {
  let vista = location.hash.slice(1);

  cargarVista(vista);
})