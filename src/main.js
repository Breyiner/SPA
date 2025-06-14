import './style.css'
import {categoriaController} from './views/Categorias/categoriasController.js';
import {productoController} from './views/Productos/productosController.js';

// variables

let rutas = [
  {
    name: 'Categorias',
    path: './src/views/Categorias/index.html',
    controller : categoriaController
  },
  {
    name: 'Productos',
    path: './src/views/Productos/index.html',
    controller : productoController
  }
]

// funciones
let solicitud = async (ruta) => {
  let data = await fetch(ruta);

  return data.text();
}

let obtenerVista = (vista) => {
  return rutas.find(elemento => elemento.name === vista);
}

let cargarVista = async (vista) => {

  let vistaObtenida = obtenerVista(vista);
  console.log(vistaObtenida);
  
  
  const main = document.querySelector('.main');
  
  let section = "";
  if (vistaObtenida) {
    section = await solicitud(vistaObtenida.path);
    main.innerHTML = section;
    vistaObtenida.controller();
  }
  else {
    section = await solicitud('./src/views/404/index.html');
    main.innerHTML = section;
  }
}

// eventos
window.addEventListener("hashchange", () => {
  let vista = location.hash.slice(1);
  console.log(vista);
  cargarVista(vista);
});

window.addEventListener("DOMContentLoaded", () => {
  let vista = location.hash.slice(1);

  cargarVista(vista);
})