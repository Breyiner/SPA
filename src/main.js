import './style.css'
import {categoriaController} from './views/Categorias/categoriasController.js';
import {nuevaCategoriaController} from './views/Categorias/nuevaCategoriaController.js';
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
  },
  {
    name: 'nuevaCategoria',
    path: './src/views/Categorias/nuevaCategoria.html',
    controller : nuevaCategoriaController
  }
]

//
let obtenerVista = (vista) => {
  return rutas.find(elemento => elemento.name === vista);
}

//
let cargarVista = async (vista) => {

  let vistaObtenida = obtenerVista(vista);
  console.log(vistaObtenida);
  
  const main = document.querySelector('.main');
  
  let section = "";

    section = await fetch(vistaObtenida.path);
    main.innerHTML = await section.text();
    vistaObtenida.controller();

}

// eventos
window.addEventListener("hashchange", () => {
  let vista = location.hash.slice(1);
  console.log(vista);
  cargarVista(vista);
});
//
window.addEventListener("DOMContentLoaded", () => {
  let vista = location.hash.slice(1);

  cargarVista(vista);
})